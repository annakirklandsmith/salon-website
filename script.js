document.addEventListener('DOMContentLoaded', function () {
   



    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `<div class="mdc-tab-bar mdc-top-app-bar mdc-top-app-bar--fixed" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">

                <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='index.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label"><img tabindex="0" style="width:2rem" src="images/tile2.png" aria-label="home"></span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='services.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Services</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='stylists.html'">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">Stylists</span>
                    </span>
                    <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                </button>

            <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='location.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Scene</span>
                </span>
                <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
            </button>

            <button  class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='tel:2522897246'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                    <a href="tel:9197773603">
                    <img src="images/phone.png" alt="Phone" />
                    </a>
                </span>
                </span>
            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            


               </div>
            </div>
        </div>
    </div>
    <div class="mdc-top-app-bar--fixed-adjust"></div>`
    
    const footer = document.getElementById('footerDiv');


<!-- https://mycyberuniverse.com/add-social-media-buttons-to-your-website.html -->


    footer.innerHTML = 

    `


    
    <div class="mdc-tab-bar mdc-tab-bar2 mdc-top-app-bar--fixed" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">


            <button i class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://www.facebook.com/AlibiSalon919/'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="https://www.facebook.com/AlibiSalon919/">
                <img src="images/facebook.png" alt="Facebook" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            <button  class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://www.instagram.com/alibisalon919/'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="https://www.instagram.com/alibisalon919/">
                <img src="images/instagram.png" alt="Instagram" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            <button  class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://www.yelp.com/biz/alibi-lilac-salon-raleigh-2/'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="https://www.yelp.com/biz/alibi-lilac-salon-raleigh-2/">
                <img src="images/yelp.png" alt="Yelp" />
                </a>
            </span>
            </span>
            <span  class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>


            <button  class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='mailto:alibisalon919@gmail.com'>
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                <a href="mailto:alibisalon919@gmail.com?subject=Message from website" target='blank'">
                <img src="images/mail.png" alt="Mail">
                </a>
            </span>
            </span>
            <span class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>

            <button class="mdc-tab mdc-tab2 mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='https://www.google.com/maps/place/303+N+Boylan+Ave,+Raleigh,+NC+27603'">
            <span class="mdc-tab__content">
                <span class="mdc-tab__text-label">    
                    <a href="https://www.google.com/maps/place/303+N+Boylan+Ave,+Raleigh,+NC+27603">
                    <img src="images/globe.png" alt="Directions">
                    </a>
                </span>
                </span>
            <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                <span class="mdc-tab-indicator__content"></span>
            </span>
            <span class="mdc-tab__ripple"></span>
            </button>


               </div>
            </div>
        </div>
    </div>`

})