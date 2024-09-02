$(document).ready(function () {
  $('.form_date_mask').inputmask({ mask: '99/99/9999' })

  var _0xc332x1 = $('.owl-carousel')
  _0xc332x1.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      300: { items: 2 },
      800: { items: 3 },
      1100: { items: 4 }
    }
  })

  if (window.location.hash) {
    setTimeout(function () {
      $('input:text:visible:first').focus()
    }, 200)
    $('.asur-form')
      .find('.form-control')
      .addClass('light')
      .delay(2e3)
      .queue(function () {
        $('.asur-form').find('.form-control').removeClass('light').dequeue()
      })
  }
  $('.dem_devis').click(function () {
    $('html,body').animate(
      { scrollTop: $('#form-dem-con').offset().top },
      'slow'
    )
    $('input:text:visible:first').focus()
    $('.asur-form')
      .find('.form-control')
      .addClass('light')
      .delay(2e3)
      .queue(function () {
        $('.asur-form').find('.form-control').removeClass('light').dequeue()
      })
  });

  $.validator.addMethod(
    'regex',
    function (e, t, r) {
      if ('' == e) return !0
      var a = r.test(e)
      return console.log(a), a
    },
    'Entrez la valeur correcte.'
  );

  $.validator.addClassRules({
    'code-postal': { regex: /(?!00000)[0-9]{5}/, minlength: 5 },
    'num-tel': { regex: /^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}/ },
    email: { regex: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i }
  });

  $('.asur-form').validate({
    errorLabelContainer: '#error-note-dem',
    wrapper: 'li',
    rules: {},
    submitHandler: function (e) {
      $(e)
      var t = $(this.submitButton),
        r = t.val()
      t
        .val(
          t.data('loading-text')
            ? t.data('loading-text')
            : 'En traitement...'
        )
        .attr('disabled', !0),
        e.submit(),
        t.val(r).attr('disabled', !1),
        $('body').addClass('loading-overlay-showing'),
        $('.g-recaptcha-checker').val(''),
        $('input[type=text]').val(''),
        $('input[type=hidden]').val(''),
        $('textarea').val(''),
        $('select').prop('selectedIndex', 0),
        $('input[type=radio][name=Conjoint]').length &&
          $("input[name=Conjoint][value='Non']").prop('checked', !0),
        $('input[type=radio][name=Enfants]').length &&
          $("input[name=Enfants][value='Non']").prop('checked', !0),
        $('input[type=radio][name=Enfants]').length &&
          $("input[name=Enfants][value='Non']").prop('checked', !0)
    },
    success: function (e, t) {
      e.siblings().removeClass('file-error'), e.remove()
    }
  })
})

$('select.form-control').attr('style', 'color: #000000 !important;')
$('select.form-control option').attr('style', 'color: #000000 !important;')
$('select.form-control').change(function () {
  var _0x576cx1 = $('#solution_sol').val()
  if (_0x576cx1 != '') {
    $('select.form-control').attr('style', 'color: #000000 !important;')
  } else {
    $('select.form-control').attr('style', 'color: #000000 !important;')
  }
})

function sh_conj () {
  $('.conjoint-elm').show()
  if ($('#CatSocialeConjoint-error').length) {
    $('#CatSocialeConjoint-error').show()
  }
  if ($('#DateNaissCojoint-error').length) {
    $('#DateNaissCojoint-error').show()
  }
}

function hd_conj () {
  $('.conjoint-elm').hide()
  $("input[name*='DateNaissCojoint']").val('')
  $("select[name*='CatSocialeConjoint']").val('')
  if ($('#CatSocialeConjoint-error').length) {
    $('#CatSocialeConjoint-error').hide()
  }
  if ($('#DateNaissCojoint-error').length) {
    $('#DateNaissCojoint-error').hide()
  }
}

function sh_enft () {
  $('.enf-elm').show()
  if ($('#NbrEnfants-error').length) {
    $('#NbrEnfants-error').show()
  }
}

function hd_enft () {
  $('.enf-elm').hide()
  $("select[name*='NbrEnfants']").val('')
  if ($('#NbrEnfants-error').length) {
    $('#NbrEnfants-error').hide()
  }
}



$(document).ready(function () {
  (window.form1Callback = function () {
    $('.asur-form .g-recaptcha-checker').val('checked'),
      jQuery('.asur-form').valid(),
      $('.g-recaptcha div div iframe').addClass('g-recaptcha-checked')
  }),

  (window.recaptcha1Expired = function () {
    $('.asur-form .g-recaptcha-checker').val('')
  })
}),
$(document).on(
  'change keyup',
  '.asur-form :input[required]:visible:not(".g-recaptcha-checker")',
  function (e) {
    let t = !0
    $('.asur-form :input[required]:visible:not(".g-recaptcha-checker")').each(
      function () {
        if (!$(this).val()) return (t = !0), !1
        t = !1
      }
    ),
      t
        ? $('.asur-form .g-recaptcha-checker').prop('disabled', !0)
        : (window.recaptchaVerifier ||
            (window.recaptchaVerifier = new grecaptcha.render(
              'g-captcha-f-1',
              {
                sitekey: '6LcQcCEoAAAAAEoC35LMOWMklIbzq_n3i69NGVII',
                callback: 'form1Callback',
                'expired-callback': 'recaptcha1Expired',
                size: 'visible'
              }
            )),
          $('.asur-form .g-recaptcha-checker').prop('disabled', !1))
  }
);