document.addEventListener('DOMContentLoaded', function () {
   



    const header = document.getElementById('headerDiv');
    header.innerHTML = 

    `<div class="mdc-tab-bar mdc-top-app-bar mdc-top-app-bar--fixed" role="tablist">
        <div class="mdc-tab-scroller">
            <div class="mdc-tab-scroller__scroll-area">
                <div class="mdc-tab-scroller__scroll-content">

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='index.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label"><img tabindex="0" style="width:2rem" src="logosquare2.png" aria-label="coat button"></span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='services.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">The Crimes</span>
                </span>
                <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
                </button>

                <button id="programsbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='stylists.html'">
                    <span class="mdc-tab__content">
                        <span class="mdc-tab__text-label">The Guilty</span>
                    </span>
                    <span id="programsindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
                        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                    </span>
                    <span class="mdc-tab__ripple"></span>
                </button>

            <button id="valuesbutton" class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0" onClick="location.href='location.html'">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">The Scene</span>
                </span>
                <span id="valuesindicator" class="mdc-tab-indicator mdc-tab-indicator--active">
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

    `<div class="footer">

    <div class="spacemaker">

    <span>
    <a class="mdc-typography--body1" href="scrapbook.html" target='blank'>
        <img src="images/social-media-icons/map.png" alt="sitemap" />
    </a>
    </span>

    <span>
    <a class="mdc-typography--body1" href="https://www.meetup.com/DataScientistaSociety/" target='blank'>
        <img src="images/social-media-icons/meetup.png" alt="Meetup" />
    </a>
    </span>

    <span>
    <a  class="mdc-typography--body1" href="https://www.linkedin.com/company/data-scientista-society" target='blank'>
        <img src="images/social-media-icons/linkedin.png" alt="Linkedin" />
    </a>
    </span>

    <span>
    <a  class="mdc-typography--body1" href="https://www.linkedin.com/groups/8496042/" target='blank'>
        <img src="images/social-media-icons/groups.png" alt="Linkedin groups" />
    </a>
    </span>

    <span>
    <a class="mdc-typography--body1" href="mailto:datascientistasociety@gmail.com?subject=Message from website" target='blank'>
        <img src="images/social-media-icons/email.png" alt="Mail" />
    </a>
    </span>

    </div>
    </div>`


})