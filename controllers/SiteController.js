const SiteController = {};

 SiteController.Index(req, resp){
     resp.render('site/index');
   }
 SiteController.About(req, resp){
     resp.render('site/about');
   }
 SiteController.Contact(req, resp){
     resp.render('site/contact');
   }

 module.exports = SiteController;
