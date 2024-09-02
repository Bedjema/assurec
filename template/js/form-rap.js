$(document).ready(function () {
  $.validator.addMethod("regex", function (_0x70a3x1, _0x70a3x2, _0x70a3x3) {
    if (_0x70a3x3 && _0x70a3x3.constructor != RegExp) {
      _0x70a3x3 = new RegExp(_0x70a3x3);
    } else {
      if (_0x70a3x3.global) {
        _0x70a3x3.lastIndex = 0;
      }
    }
    return this.optional(_0x70a3x2) || _0x70a3x3.test(_0x70a3x1);
  });
  $(".popup").magnificPopup({
    type: "inline",
    items: { src: "#label-plat" },
    closeOnBgClick: false,
    preloader: true,
    modal: true,
    callbacks: {
      open: function () {
        $(".filter-bg").css("filter", "blur(8px)");
      },
      close: function () {
        $(".filter-bg").css("filter", "blur(0px)");
      },
    },
  });
  $("#form_submit_rapp").validate({
    errorLabelContainer: "#error-note-rapp",
    wrapper: "li",
    rules: {
      Telephone: {
        required: true,
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        maxlength: 20,
      },
    },
    messages: {
      Telephone: {
        required:
          "- Veuillez saisir votre numéro de téléphone car il est obligatoire.",
        maxlength:
          "- le champ de la numéro de téléphone ne devrait pas dépasser {0} caractères.",
        regex: "- Veuillez saisir un numéro de téléphone valide.",
      },
    },
    submitHandler: function (_0x70a3x4, _0x70a3x5) {
      _0x70a3x5.preventDefault();
      $("#form_submit_rapp_btn").prop("disabled", true);
      var Telephone = $("#Telephone").val();
      var Data = { Telephone: Telephone};
      $.ajax({
        type: "POST",
        url: $("#form_submit_rapp").attr("action"),
        dataType: 'json',
        data: $('#form_submit_rapp').serialize(),
        success: function (_0x70a3x7) {
          $("#label-plat").children("#form_dem_content").hide();
          if(_0x70a3x7 == '1') {
            $(".title-rapp").text("Demande de rappel bien enregistrée.");
          if ($("#label-plat").length) {
            $("#label-plat").append('<div class="info-fm text-center" id="form_hr_rapp">Nous vous rappelons dans quelques instants.<br>Merci pour votre confiance.</div>');
          }
          } else {
            $(".title-rapp").text("DESOLE");
            if ($("#label-plat").length) {
              $("#label-plat").append('<div class="info-fm text-center" id="form_hr_rapp">Une erreur est survenue nous ne pouvons pas donner suite à votre demande.<br>Merci de réessayer plus tard</div>');
            }
          }
          $("#Telephone").val("");
          $("#form_submit_rapp_btn").prop("disabled", false);
        },
        error: function (_0x70a3x7) {
          $("#label-plat").children("#form_dem_content").hide();
          $(".title-rapp").text("DESOLE");
          if ($("#label-plat").length) {
            $("#label-plat").append('<div class="info-fm text-center" id="form_hr_rapp">Une erreur est survenue nous ne pouvons pas donner suite à votre demande.<br>Merci de réessayer plus tard</div>');
          }
          $("#Telephone").val("");
          $("#form_submit_rapp_btn").prop("disabled", false);
        },
      });
    },
  });
  $(document).on("click", ".popup-label-plat-dismiss", function (_0x70a3x8) {
    $.magnificPopup.close();
    $(".title-rapp").text("Veuillez saisir votre numéro de téléphone");
    $("#label-plat").children("#form_dem_content").show();
    if ($("#form_hr_rapp").length) {
      $("#label-plat").children("#form_hr_rapp").remove();
    }
    $("#Telephone").val("");
  });
});
