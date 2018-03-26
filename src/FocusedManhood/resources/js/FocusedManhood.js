var todaysDate = new Date();

$(document).ready(function() {
    // Tooltips Initialization
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $.ajax(
    {
        url: "../resources/better.json",
        dataType: 'json',
        success: function(data) {
            var betterText = data;
            console.log(betterText[0].text);
            $('#category-text').on('click', function(){
                const $randomValue = Number(Math.floor((Math.random() * betterText.length)));
                $('#category').text(betterText[$randomValue].category);
                $('.lead').text(betterText[$randomValue].text);
            });
            $.each(betterText, function(key, value) {
                $('#betterModalBody').append(`<h4 id="better-modal-category">${betterText[key].category}</h4>`)
                $('#betterModalBody').append(`<p id="better-man-modal-text">${betterText[key].text}</p>`);;
            });
        },
        error: function() {
            alert("Problem loading json file");
        }
    })
    $.ajax(
    {
        url: "../resources/prayers.json",
        dataType: 'json',
        success: function(data) {
            var prayers = data;
            $.each(prayers, function(key, dailyDevotional) {
                if (key === todaysDate.getDate()) {
                    $('#scripture').append(`<h5 class="card-title"><strong>Help me Lord, ${dailyDevotional.title}</strong></h5>`)
                    $.each(dailyDevotional.scripture, function(index, selectedScripture) {
                        $('#scripture').append(`<p class="card-text">${selectedScripture.scriptureText}`)
                        $('#scripture').append(`<small class="text-muted">${selectedScripture.scriptureReference}</small>`)
                        if (index !== (dailyDevotional.scripture.length - 1)) {
                            $('#scripture').append('<hr>')
                        }
                    });
                    $('#prayer').append(`<h5 class="card-title"><strong>Prayer</strong></h5>`)
                    $('#prayer').append(`<p class="card-text">${dailyDevotional.prayer}`)
                    $('#prayer').append(`<small class="text-muted">Amen</small>`)

                    $('#author').append(`<h5 class="card-title"><strong>Author Thoughts</strong></h5>`)
                    $.each(dailyDevotional.author, function(num, authorParagraph) {
                        $('#author').append(`<p class="card-text">${authorParagraph.authorText}`)
                    });
                   $('#quote').append(`<h5 class="card-title"><strong>Quotes</strong></h5>`)
                   $.each(dailyDevotional.quotes, function(i, selectedQuote) {
                        $('#quote').append(`<div class="card bg-light text-center"`)
/*                        $('#quote').append(`<blockquote class="blockquote mb-0 text-center">`)*/
                        $('#quote').append(`<p class="text-center card-text">${selectedQuote.quoteText}</p>`)
                        $('#quote').append(`<footer class="blockquote-footer text-center">`)
                        $('#quote').append(`<p  class="text-center text-muted"><small><cite title="Source Title">${selectedQuote.quoteAuthor}</cite></small></p>`)
                        $('#quote').append(`</footer></blockquote>`)
                        $('#quote').append(`</div`)
                   });
               }
            });
        },
        error: function(blah, doh) {
         alert("Problem loading prayers json file");
         }
    });
});



