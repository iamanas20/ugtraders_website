window.addEventListener('DOMContentLoaded', (event) => {
    var url = new URL(window.location.href);
    var type = url.searchParams.get("type");


    const div = document.createElement('div');
    const div2 = document.getElementById('content');;


    if(type == 1){
      div.innerHTML = `
        <form class="form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="LV74DNVCZKUN8">
          <input type="hidden" name="on0" value="Full Name"><span>Full Name</span><input class="input" type="text" name="os0" maxlength="200">
          <br>
          <br>
          <input type="hidden" name="on1" value="Email"><span>Email</span><input class="input" type="email" name="os1" maxlength="200">
          <br>
          <br>
          <div class="button-container">
            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif
            " border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif
            " width="1" height="1"/>
          </div>
        </form>
      `;
    }else{
      div.innerHTML = `
        <form class="form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="Z8HU7ANEQP5UC">
          <input type="hidden" name="on0" value="Full Name"><span>Full Name</span><input class="input" type="text" name="os0" maxlength="200">
          <br>
          <br>
          <input type="hidden" name="on1" value="Email"><span>Email</span><input class="input" type="email" name="os1" maxlength="200">
          <br>
          <br>
          <div class="button-container">
            <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_subscribeCC_LG.gif
            " border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif
            " width="1" height="1"/>
          </div>
        </form>
      `;
    }

    document.getElementById('content').appendChild(div);
});
