/*
===============================
============MNFIXED============
===============================
      Version: 2.0.1
       Author: Hoang Minh Ngoc
Date Publish : 13/05/2019
*/
(function($){
    class mnfixed{
        constructor(ele,opt){
            this.ele = ele;
            this.defaults = {
                limit:'',
                top:0,
                break:0,
                type:1, //TYPE = 1 : FIXT ON TOP | TYPE = 2 : FIX ON BOTTOM
                zindex:100,
            };
            this.options = $.extend({},this.defaults,opt);
            this.init();
            this.run();
        }
    }
    mnfixed.prototype.init = function(){
        var _ = this;
        // WRAP ELEMENT TO CLASS
        _.ele.wrap("<div class='mnfixed_self'></div>");
        _.ele.parents(".mnfixed_self").wrap("<div class='mnfixed_wrap'></div>");
        // SET VAR
        _.self  = _.ele.parents(".mnfixed_self");
        _.wrap  = _.ele.parents(".mnfixed_wrap");
        _.limit = $(_.options.limit);
        // SETUP WIDTH AND POSITION
        _.wrap.css({
            "position":"relative",
        });
        _.self.css({
            "z-index":_.options.zindex,
        });
        _.setElementHeight();
        _.setElementWidth();
    }
    mnfixed.prototype.run = function(){
        var _ = this;
        $(window).on("load resize scroll",function(){
            if(_.getBreak()==true){
                // _.setElementHeight();
                _.setElementWidth();
                _.setElementLeft();
                switch (_.options.type){
                    case 1 :
                        _.run_type_1();
                        break;
                    case 2 : 
                        _.run_type_2();
                        break;
                }
            }
            else{
                _.setElementDefault();
            }
        });
    }
    mnfixed.prototype.run_type_1 = function(){
        var _ = this;
        if($(window).scrollTop() > _.getElementOffset().top && _.getBreak()==true){
            _.ele.removeClass("fixed_bottom");
            _.ele.addClass("fixed");
            _.self.css({
                "position":"fixed",
                "left":_.getElementOffset().left+"px",
                "top":_.options.top+"px",
            });
        }
        else{
            _.ele.removeClass("fixed");
            _.self.css({
                "position":"initial",
                "left":"0px",
                "top":"0px",
            });
        }
        if(typeof _.limit.offset() == "object" && _.getBreak()==true){
            if(_.getElementOffset().bottom_scroll >= _.getLimitOffset().bottom){
                var term_top = _.getLimitOffset().bottom - (_.getElementOffset().top + _.getElementHeight() + _.options.top);
                _.ele.removeClass("fixed");
                _.ele.addClass("fixed_bottom");
                _.self.css({
                    "position":"absolute",
                    "left":"0px",
                    "top":term_top+"px",
                });
            }
        }
    }
    mnfixed.prototype.run_type_2 = function(){
        var _ = this;
        if(($(window).scrollTop() + $(window).outerHeight()) > _.getElementOffset().bottom && _.getBreak()==true){
            _.ele.removeClass("fixed_bottom");
            _.ele.addClass("fixed");
            _.self.css({
                "position":"fixed",
                "left":_.getElementOffset().left+"px",
                "top":"initial",
                "bottom":"0px",
            });
        }
        else{
            _.ele.removeClass("fixed");
            _.self.css({
                "position":"initial",
                "left":"0px",
                "bottom":"0px",
            });
        }
        if(typeof _.limit.offset() == "object" && _.getBreak()==true){
            if(($(window).scrollTop() + $(window).outerHeight()) > _.getLimitOffset().bottom){
                var term_top = _.getLimitOffset().bottom - (_.getElementOffset().top + _.getElementHeight());
                _.ele.removeClass("fixed");
                _.ele.addClass("fixed_bottom");
                _.self.css({
                    "position":"absolute",
                    "left":"0px",
                    "top":"initial",
                    "bottom":-term_top+"px",
                });
            }
        }
    }
    // GET VALUE
    mnfixed.prototype.getLimitOffset = function(){
        var _ = this;
        if(typeof _.limit.offset() == "object"){
            var ret = {};
            ret.top           = _.limit.offset().top;
            ret.bottom        = _.limit.offset().top + _.limit.outerHeight();
            ret.left          = _.limit.offset().left;
            ret.right         = _.limit.offset().right;
            return ret;
        }
        else{
            return false;
        }
    }
    mnfixed.prototype.getElementOffset = function(){
        var _ = this;
        var ret = {};
        if(_.options.type==1){
            ret.top           = _.wrap.offset().top - _.options.top;
            ret.bottom        = _.wrap.offset().top + _.wrap.outerHeight() + _.options.top;
            ret.left          = _.wrap.offset().left;
            ret.right         = _.wrap.offset().right;
            ret.top_scroll    = $(window).scrollTop() + _.options.top;
            ret.bottom_scroll = $(window).scrollTop() + _.ele.outerHeight() + _.options.top;
            ret.left_scroll   = _.ele.offset().left;
            ret.right_scroll  = _.ele.offset().right;
        }
        else if(_.options.type==2){
            ret.top           = _.wrap.offset().top;
            ret.bottom        = _.wrap.offset().top + _.wrap.outerHeight();
            ret.left          = _.wrap.offset().left;
            ret.right         = _.wrap.offset().right;
            ret.top_scroll    = $(window).scrollTop();
            ret.bottom_scroll = $(window).scrollTop() + _.ele.outerHeight();
            ret.left_scroll   = _.ele.offset().left;
            ret.right_scroll  = _.ele.offset().right;
        }
        return ret;
    }
    mnfixed.prototype.getElementHeight = function(){
        var _ = this;
        return _.ele.outerHeight();
    }
    mnfixed.prototype.getElementWidth = function(){
        var _ = this;
        return _.wrap.outerWidth();
    }
    mnfixed.prototype.getBreak = function(){
        var _ = this;
        if($(window).outerWidth()>=_.options.break){
            return true;
        }
        else{
            return false;
        }
    }
    // SET VALUE
    mnfixed.prototype.setElementWidth = function(){
        var _ = this;
        _.self.css({
            "width":_.getElementWidth(),
        });
    }
    mnfixed.prototype.setElementHeight = function(){
        var _ = this;
        _.wrap.css({
            "position":"relative",
            "height": _.getElementHeight(),
        });
    }
    mnfixed.prototype.setElementLeft = function(){
        var _ = this;
        _.self.css({
            "left":_.getElementOffset().left+"px",
        });
    }
    mnfixed.prototype.setElementDefault = function(){
        var _ = this;
        _.ele.removeClass("fixed");
        _.ele.removeClass("fixed_bottom");
        _.wrap.css({
            "position":"initial",
            "height":"initial",
        });
        _.self.css({
            "position":"initial",
            "left":"initial",
            "top":"initial",
            "width":"initial",
        });
    }
    // CALL PLUGIN
    $.prototype.mnfixed = function(options) {
        var _ = this;
        if(typeof _.offset() == "object"){
            var opt = arguments[0];
            _ = new mnfixed(_, opt);
        }
        else{
            console.log("No Excertion !!!!!, ["+_+"]");
        }
    }
})(jQuery);