$(document).ready(function() {
    // Agregar clase "activo" al hacer clic en un enlace
    $(".mi-enlace").click(function() {
        if (!$(this).hasClass("activo")) {
            // Remover clase "activo" de todas las secciones
            $(".section").removeClass("activo");

            // Obtener el href del enlace clicado
            var target = $(this).attr("href");

            // Agregar clase "activo" a la sección correspondiente
            $(target).addClass("activo");

            // Deshabilitar el enlace clicado
            $(this).addClass("activo");
        }
    });
    

    // Verificar y aplicar clases "activo" al desplazarse
    $(window).scroll(function() {
        $(".section").each(function() {
            if ($(this).isOnScreen()) {
                var sectionId = $(this).attr("id");
                $("a[href='#" + sectionId + "']").addClass("activo");
            } else {
                var sectionId = $(this).attr("id");
                $("a[href='#" + sectionId + "']").removeClass("activo");
            }
        });
    });

    // Función para verificar si una sección está en la ventana gráfica
    $.fn.isOnScreen = function() {
        var viewport = {
            top: $(window).scrollTop(),
            left: $(window).scrollLeft()
        };
        viewport.right = viewport.left + $(window).width();
        viewport.bottom = viewport.top + $(window).height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
    };

    $(window).scroll(function() {
        // Obtiene la posición vertical actual del usuario
        var scrollPosition = $(window).scrollTop();

        // Verifica en qué sección te encuentras y aplica la clase "activo" al enlace correspondiente
        if (scrollPosition >= $("#section1").offset().top && scrollPosition < $("#section2").offset().top - 10) {
            $(".mi-enlace").removeClass("activo");
            $(".mi-enlace[href='#section1']").addClass("activo");
        } else if (scrollPosition >= $("#section2").offset().top - 10 && scrollPosition < $("#section3").offset().top - 10) {
            $(".mi-enlace").removeClass("activo");
            $(".mi-enlace[href='#section2']").addClass("activo");
        } else if (scrollPosition >= $("#section3").offset().top - 10) {
            $(".mi-enlace").removeClass("activo");
            $(".mi-enlace[href='#section3']").addClass("activo");}
        else if (scrollPosition >= $("#section1").offset().top - 10) {
                $(".mi-enlace").removeClass("activo");
                $(".mi-enlace[href='#section1']").addClass("activo");
            
        } else {
            $(".mi-enlace").removeClass("activo");
        }
    });
});


$(document).ready(function () {
    $(".cross").hide();
    $(".menu2").hide();

    $(".hamburger").click(function () {
        $(".menu2").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".menu2").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    // Agregar un controlador de eventos para todos los enlaces del menú
    $(".menu2 ul li a").click(function () {
        // Minimizar el menú
        $(".menu2").slideUp("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});




