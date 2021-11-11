var carousel = new Vue ({
    el: "#app",
    data: {
        activeSlide: 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem Ipsum'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem Ipsum'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem Ipsum'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem Ipsum'
            },
            {
                image: 'img/05.jpg',
                title: 'Hawai',
                text: 'Lorem Ipsum'
            },
        ], 

    },
    methods: {
        nextSlide: function(){
            if(this.activeSlide === this.slides.length - 1){
            this.activeSlide = 0;
            }else {
                this.activeSlide ++;
            }
    },
        prevSlide: function(){
            if(this.activeSlide == 0){
                this.activeSlide = this.slides.length - 1;
            }else {
                this.activeSlide --;
        }
    }

}
});