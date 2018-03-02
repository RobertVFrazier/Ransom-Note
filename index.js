'use strict';

function main(){
    $('.lightbox_trigger').click(function(e){
        e.preventDefault();
        var image_href=$(this).attr("href");
        if($('#lightbox').length>0){
            $('#content').html(`<img src='${image_href}' />`);
            $('#lightbox').fadeIn('slow');
        } else{
            var lightbox=`
                <div id="lightbox">
                    <p class="exit">X</p>
                    <div id="content">
                        <img src='${image_href}' />
                    </div>
                </div>
            `;
            $('body').append(lightbox);
            $('#lightbox').hide();
            $('#lightbox').fadeIn('slow');
        }
    });

	$('body').on('click', '.exit', function() {
		$('#lightbox').fadeOut();
	});
}

$(main);