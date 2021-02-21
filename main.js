const app = {
    data() {
        return {
            logo: "./Images/music_logo.svg",
            gallery: [{
                    picture_name: "รองช้ำ",
                    src: "./Images/รองช้ำ.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false,
                    eachpic: true
                },
                {

                    picture_name: "ไม่บอกเธอ",
                    src: "./Images/เกิดมาเพื่ออกหัก.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false,
                    eachpic: true
                },
                {

                    picture_name: "คลั่งรัก",
                    src: "./Images/คลั่งรัก.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false,
                    eachpic: true
                }
            ],

            search: {
                searchbox: false,
                cancelbox: false,
                textinput: ""
            },
            bg_zoom: {
                show: false
            }
        }
    },
    methods: {
        toggleZoom(index) {
            this.bg_zoom.show = true
            this.gallery[index].zoom = true
            this.gallery[index].close = true
        },
        toggleHeart(index) {
            this.gallery[index].fav = !this.gallery[index].fav
            this.gallery[index].fav_bor = !this.gallery[index].fav_bor
        },
        toggleUnHeart(index) {
            this.gallery[index].fav_bor = !this.gallery[index].fav_bor
            this.gallery[index].fav = !this.gallery[index].fav

        },
        toggleCloseZoom(index) {
            this.bg_zoom.show = false
            this.gallery[index].zoom = false
            this.gallery[index].close = false
        },
        toggleSearch() {
            this.search.searchbox = true
            this.search.cancelbox = true
        },
        toggleCancel() {
            this.search.searchbox = false
            this.search.cancelbox = false
            this.search.textinput = ""
            for (let i = 0; i < this.gallery.length; i++) {
                this.gallery[i].eachpic = true
            }

        },
        searchInput() {
            for (let i = 0; i < this.gallery.length; i++) {
                if ((this.gallery[i].picture_name.toLowerCase().includes(this.search.textinput.toLowerCase())) == false) {
                    this.gallery[i].eachpic = false
                }else {
                    this.gallery[i].eachpic = true
                }
            }
        },

    },

    computed: {
        countUndone() {
            return this.gallery.filter(gallery => gallery.fav).length
        },
        filterNoFound() {
            return this.gallery.filter(gallery => !gallery.eachpic).length
        }

    }

}
Vue.createApp(app).mount('#app')