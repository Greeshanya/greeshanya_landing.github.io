
window.addEventListener('DOMContentLoaded', function() {


    let tabs = document.querySelectorAll('.btn'),
        tabsContent = document.querySelectorAll('.tab__container'),
        tabsParent = document.querySelector('.header'),
        skillTabs = document.querySelector('.skills__items'),
        skillArea = document.querySelector('.skill__text-area');


            
        function hideTabContent() {
        
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabcontainer__active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabcontainer__active');
        }
        
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', function(event) {
            const target = event.target;
            if(target && target.classList.contains('btn')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        function handler () {

            skillTabs.onmouseover = function(e) {
                skillArea.style.display='block';
            };

            skillTabs.onmouseout = function(e) {
                skillArea.style.display='none';
            };


            }   

        handler();





});

