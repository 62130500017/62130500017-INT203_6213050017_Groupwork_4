const app = {
    data() {
        return {
            gallery: [{
                    picture_name: "รองช้ำ",
                    src: "./Images/รองช้ำ.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false
                },
                {

                    picture_name: "ไม่บอกเธอ",
                    src: "./Images/เกิดมาเพื่ออกหัก.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false
                },
                {

                    picture_name: "คลั่งรัก",
                    src: "./Images/คลั่งรัก.jpg",
                    fav: false,
                    fav_bor: true,
                    zoom: false,
                    close: false
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
            this.searchInput[index].zoom = true
            this.searchInput[index].close = true
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
            this.searchInput[index].zoom = false
            this.searchInput[index].close = false
        },
        toggleSearch() {
            this.search.searchbox = true
            this.search.cancelbox = true
        },
        toggleCancel() {
            this.search.searchbox = false
            this.search.cancelbox = false
            this.search.textinput = ""
        }

    },

    computed: {
        countUndone() {
            return this.gallery.filter(gallery => gallery.fav).length
        },
        searchInput() {
            return this.gallery.filter(gallery => gallery.picture_name.toLowerCase().includes(this.search.textinput.toLowerCase()))
        }

    }

}
Vue.createApp(app).mount('#app')