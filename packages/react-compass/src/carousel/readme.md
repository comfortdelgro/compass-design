### Entity Relationship Diagram

We have `CarouselSlider` as a common component that can be reused in many places. The other will automatically have the logic of sliding slides, auto switch, navigation buttons...

We will have so much more type of carousel: Only image, Promotion, Any content...

![ContentSlider](https://github.com/comfortdelgro/compass-design/assets/119040724/0c0192e0-b444-4c0c-ba82-9de50f45e43c)

### Navigation Button Click

![CarouselNavigate](https://github.com/comfortdelgro/compass-design/assets/119040724/7eb9d80d-c2d5-4e47-bb9f-454599cd4abf)

This flow chart to describes how we handle next or previous button. In our code, we will listen to the event and count up or count down depends on user click.

### Auto switch

![CarouselAutoSwitch](https://github.com/comfortdelgro/compass-design/assets/119040724/b21adf03-c691-4f9d-8b4c-6c852759d8d7)

We will do nothing when autoSwitch is false. Whenever the timer is end, slider will move to the next slide. At that time, we will check for autoSwitch flag and set the timer again. This will be infinite loop to let the slider always auto switch to new slide.
