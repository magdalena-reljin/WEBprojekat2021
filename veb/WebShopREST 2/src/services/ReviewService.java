package services;

import java.io.IOException;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import beans.Order;
import beans.Restaurant;
import beans.Review;
import dao.RestaurantDAO;
import dao.ReviewDAO;

@Path("/reviews")
public class ReviewService {

	@Context
	ServletContext ctx;
	
	public ReviewService() {
		System.out.println("KONSTRUKTOR");
	}
	
	@PostConstruct
	// ctx polje je null u konstruktoru, mora se pozvati nakon konstruktora (@PostConstruct anotacija)
	public void init() {
		// Ovaj objekat se instancira vi�e puta u toku rada aplikacije
		// Inicijalizacija treba da se obavi samo jednom
		if (ctx.getAttribute("reviewDAO") == null) {
	    	String contextPath = ctx.getRealPath("");
			ctx.setAttribute("reviewDAO", new ReviewDAO(contextPath));
		}
	}
	

	@POST
	@Path("/getReviewsForManager")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Review> getReviewsForManager(Restaurant restaurant) {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		return reviewDao.findReviewsForManager(restaurant.getName());
	}
	
	@GET
	@Path("/getReviewsForAdmin")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Review> getReviewsForAdmin() {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		return reviewDao.findReviewsForAdmin();
	}
	
	@PUT
	@Path("/setStatus")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void setStatus(Review review) {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		System.out.println("zastooooooooooooooooooooooooooooooooooooooooooooooooooooo "+review.getId());
	    reviewDao.setStatus(review);
	}
	

	@POST
	@Path("/addReview")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean addReview(Review review) {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		reviewDao.saveReview(review);
		return true;
	}
	
	@PUT
	@Path("/setAvg")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public boolean setAvg(Review review) {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		RestaurantDAO restaurantDao = (RestaurantDAO) ctx.getAttribute("restaurantDAO");
		double num= reviewDao.setAvg(review);
		restaurantDao.setAvg(review.getRestaurant().getName(),num);
		return true;
	}
	
	@POST
	@Path("/findAllReviews")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Review> findAllReviews(Restaurant restaurant) {
		ReviewDAO reviewDao = (ReviewDAO) ctx.getAttribute("reviewDAO");
		return reviewDao.findReviewsForRestaurantSite(restaurant.getName());
	}

}
