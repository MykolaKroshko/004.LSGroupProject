$(document).ready(function () {
    (function() {
        $('.cross').on('click', function () {
            var
                $this=$(this),
                container=$this.closest('.slider_container');

            container.hide();
        });
    }());


    (function(){
        counter=1;

        $('.arrow').on('click', function () {
            var $this=$(this),
                container=$this.closest('.slider'),
                slide=container.find('.slider__li'),
                activeSlide=slide.filter('.slider__li_active'),
                prevSlide = activeSlide.prev(),
                nextSlide = activeSlide.next(),
                firstSlide = slide.first(),
                lastSlide = slide.last()

                ;

            if($this.hasClass('arrow_left')){
                if(counter>=slide.length){
                    counter=0;
                }
                if(counter<0){
                    counter=0;
                }

                pos=counter*(-100);
                slide.animate({'left': pos+'%'});
                counter++;
            }


            if($this.hasClass('arrow_right')){
                if(counter>=1){
                    counter=-slide.length+1;
                }

                pos=counter*(100);
                slide.animate({'left': pos+'%'});
                counter++;

            }

            console.log(counter)

        });


    }());





});