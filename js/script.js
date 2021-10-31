$(document).ready(function () {

    //change text
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 50,
            loop: true,
            backDelay: 1000,
            backSpeed: 50
        });
    }

    //first question
    let current = 1;
    let q1 = [];
    let condation1 = true;
    let condation2 = true;
    $('.question1 li').click(function () {
        if (q1.length > 0) {
            for (let i = 0; i < q1.length; i++) {
                if (q1[i] == $(this).children(0).children(0).val()) {
                    const index = q1.indexOf(q1[i]);
                    if (index > -1 && condation1 && condation2) {
                        q1.splice(index, 1);
                        condation1 = false;
                        condation2 = false;

                    } else {
                        condation2 = true;
                    }
                }
            }
        }
        if (condation1) {
            $(this).addClass('active');
            q1.push($(this).children(0).children(0).val());
            condation1 = false;
        } else {
            $('.question1 li').each(function () {
                if (q1.indexOf($(this).children(0).children(0).val()) > -1) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            })
            if (condation2)
                condation1 = true;
            else
                condation2 = true;
        }
        changes();
    })

    //next btn condation
    function changes() {
        $('.myPagination').css('justify-content', 'center');
        if (q1.length > 0) {
            $(".myPagination .next").prop('disabled', false);
        } else {
            $(".myPagination .next").prop('disabled', true);
        }
    }
    changes();

    //next & radio input
    next = function (event) {
        if ($(event.target).parent().hasClass("list-group-item")) {
            $('.curtain').removeClass('d-none');
            if (current == 6) {
                $(event.target).parent().addClass('active');
                $(event.target).parent().siblings().removeClass('active');
                $(".myPagination .next").prop('disabled', false);
                setTimeout(
                    function () {
                        $(event.target).parent().parent().parent().addClass('d-none');
                        $(event.target).parent().parent().parent().next().removeClass('d-none');
                        $('.question7 .content').addClass('d-none');
                        $('.formArrowsContainer').addClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        $(".myPagination .next").prop('disabled', true);
                        current++;
                        $('.curtain').removeClass('d-none');
                        setTimeout(function () {
                            $('.question7 .progress-bar').css('width', '100%');
                        }, 700);
                        setTimeout(function () {
                            $('.question7 .overlay').addClass('d-none');
                            $('.question7 .content').removeClass('d-none');
                            $('.formArrowsContainer').removeClass('d-none');
                            $('.curtain').addClass('d-none');
                        }, 8500);
                    }, 700);
            } else if (current == 7) {
                $(event.target).parent().addClass('active');
                $(event.target).parent().siblings().removeClass('active');
                $(".myPagination .next").prop('disabled', false);
                setTimeout(
                    function () {
                        $('.question7').addClass('d-none');
                        $('.question8').removeClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        $(".myPagination .next").prop('disabled', true);
                        current++;
                        $('.curtain').addClass('d-none');
                    }, 700);
            } else if (current == 10) {
                $(event.target).parent().addClass('active');
                $(event.target).parent().siblings().removeClass('active');
                $(".myPagination .next").prop('disabled', false);
                setTimeout(
                    function () {
                        $('.question10').addClass('d-none');
                        $('.question11').removeClass('d-none');
                        $('.question11 .content').addClass('d-none');
                        $('.formArrowsContainer').addClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        $(".myPagination .next").prop('disabled', false);
                        current++;
                        $('.curtain').addClass('d-none');
                        setTimeout(function () {
                            $('.question11 .overlay').addClass('d-none');
                            $('.question11 .content').removeClass('d-none');
                            $('.formArrowsContainer').removeClass('d-none');
                        }, 2500);
                    }, 700);
            } else if (current == 11) {
                $(event.target).parent().addClass('active');
                $(event.target).parent().siblings().removeClass('active');
                $(".myPagination .next").prop('disabled', false);
                setTimeout(
                    function () {
                        $('.question11').addClass('d-none');
                        $('.question12').removeClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        $(".myPagination .next").prop('disabled', true);
                        current++;
                        $('.curtain').addClass('d-none');
                    }, 700);
            } else if (current == 12) {
                $('.formArrowsContainer').addClass('d-none');
                setTimeout(
                    function () {
                        $('.question12').addClass('d-none');
                        $('.question13').removeClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        $('.finalStep').removeClass('d-none');
                        current++;
                        $('.curtain').addClass('d-none');
                    }, 700);
            } else {
                $(event.target).parent().addClass('active');
                $(event.target).parent().siblings().removeClass('active');
                $(".myPagination .next").prop('disabled', false);
                setTimeout(
                    function () {
                        $(event.target).parent().parent().parent().addClass('d-none');
                        $(event.target).parent().parent().parent().next().removeClass('d-none');
                        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
                        $('.current').html(current + 1);
                        if ($(event.target).parent().parent().parent().next().find(".active").length > 0 || current == 10) {
                            $(".myPagination .next").prop('disabled', false);
                        } else {
                            if (current == 11) {
                                if (condation3)
                                    $(".myPagination .next").prop('disabled', true);
                                else
                                    $(".myPagination .next").prop('disabled', false);
                            } else
                                $(".myPagination .next").prop('disabled', true);
                        }
                        current++;
                        $('.curtain').addClass('d-none');
                    }, 700);
            }
        }
    };

    //skip button
    skip = function () {
        $('.formArrowsContainer').addClass('d-none');
        $('.question12').addClass('d-none');
        $('.question13').removeClass('d-none');
        $('header .progress-bar').css('width', ((100 * (current + 1)) / 13) + '%');
        $('.current').html(current + 1);
        $('.finalStep').removeClass('d-none');
        current++;
    }


    $('form .next').click(function () {
        if (current < 13) {
            $('.curtain').removeClass('d-none');
            $('.question').eq(current - 1).addClass('d-none');
            $('.question').eq(current).removeClass('d-none');
            $('.current').html(current + 1);
            $('header .progress-bar').css('width', (((current + 1) * 100) / 13) + '%');
            $(".myPagination .prev").removeClass('d-none');
            $('.myPagination').css('justify-content', 'space-between');
            if (current == 12) {
                $('.finalStep').removeClass('d-none');
                $('.formArrowsContainer').addClass('d-none');
                $('.curtain').addClass('d-none');
            } else {
                if (current == 6) {
                    $('.formArrowsContainer').addClass('d-none');
                    $('.question7 .overlay').removeClass('d-none');
                    $('.question7 .content').addClass('d-none');
                    setTimeout(
                        function () {
                            $('.question7 .progress-bar').css('width', '100%');
                            $('.question7 .content').addClass('d-none');
                            setTimeout(function () {
                                $('.question7 .overlay').addClass('d-none');
                                $('.question7 .content').removeClass('d-none');
                                $('.formArrowsContainer').removeClass('d-none');
                                $('.curtain').addClass('d-none');
                            }, 4500);
                        }, 700);
                }
                if (current == 10) {
                    $('.formArrowsContainer').addClass('d-none');
                    $('.question11 .overlay').removeClass('d-none');
                    $('.question11 .content').addClass('d-none');
                    setTimeout(
                        function () {
                            $('.question11 .overlay').addClass('d-none');
                            $('.question11 .content').removeClass('d-none');
                            $('.formArrowsContainer').removeClass('d-none');
                            $('.curtain').addClass('d-none');
                        }, 700);
                }
                if ($('.question').eq(current).find(".active").length > 0 || current == 10) {
                    $(".myPagination .next").prop('disabled', false);
                } else {
                    if (current == 11) {
                        if (condation3)
                            $(".myPagination .next").prop('disabled', true);
                        else
                            $(".myPagination .next").prop('disabled', false);
                    } else
                        $(".myPagination .next").prop('disabled', true);
                }
                $('.curtain').addClass('d-none');
            }
            current++;
        }
    })

    //prev btn
    $('form .prev').click(function () {
        if (current > 1) {
            if (current == 13) {
                $('.finalStep').addClass('d-none');
            }
            $('.question').eq(current - 1).addClass('d-none');
            $('.question').eq(current - 2).removeClass('d-none');
            $('.current').html(current - 1);
            $('header .progress-bar').css('width', (((current - 1) * 100) / 13) + '%');
            $(".myPagination .next").prop('disabled', false);
            if (current == 2) {
                $(".myPagination .prev").addClass('d-none');
                $('.myPagination').css('justify-content', 'center');
            } else {
                $(".myPagination .prev").removeClass('d-none');
                $('.myPagination').css('justify-content', 'space-between');
            }
            if (current == 7) {
                $('.question7 .progress-bar').css('width', '0%');
            }
            if (current == 8) {
                $('.question7 .overlay').addClass('d-none');
                $('.question7 .content').removeClass('d-none');
            }
            if (current == 11) {
                $('.question11 .overlay').removeClass('d-none');
                $('.question11 .content').addClass('d-none');
            }
            current--;
        }
    })

    //select image
    let condation3 = true;
    readURL = function (input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
            $('.userPicContainer .scanningBar').removeClass('d-none');
            $('.userPicContainer .right').addClass('d-none');
            $(".myPagination .next").prop('disabled', true);
            setTimeout(
                function () {
                    $('.userPicContainer .right').removeClass('d-none');
                    $(".myPagination .next").prop('disabled', false);
                    $('.userPicContainer .scanningBar').addClass('d-none');
                    condation3 = false;
                }, 10250);
        }
    }

    // CAMERA SETTINGS.
    takePic = function () {
        Webcam.set({
            width: 352,
            height: 240,
            image_format: 'jpg',
            jpeg_quality: 100
        });
        Webcam.attach('#camera');
    }

    // SHOW THE SNAPSHOT.
    let cameraCondation = true;
    takeSnapShot = function () {
        if (cameraCondation) {
            takePic();
            cameraCondation = false;
        }
        else {
            Webcam.snap(function (data_uri) {
                $('#blah').attr('src', data_uri);
            });
            Webcam.reset('#camera');
            $('.userPicContainer .scanningBar').removeClass('d-none');
            $('.userPicContainer .right').addClass('d-none');
            $(".myPagination .next").prop('disabled', true);
            setTimeout(
                function () {
                    $('.userPicContainer .right').removeClass('d-none');
                    $(".myPagination .next").prop('disabled', false);
                    $('.userPicContainer .scanningBar').addClass('d-none');
                    condation3 = false;
                }, 10250);
        }
    }

    //get weather
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=12.9889055&lng=77.574044",
        "method": "GET",
        "headers": {
            "x-api-key": "1bfda10ee958904a99b79f3b3a06a94cac6fc9051e496d1e2082c373486ecedb",
            "Content-type": "application/json"
        }
    };
    $.ajax(settings).done(function (response) {
        let degree = Math.round((response.data.apparentTemperature - 32) * (5 / 9));
        let humidity = response.data.humidity * 100;
        if (humidity > 65) {
            humidity = "مرتفعة";
        } else if (humidity < 35) {
            humidity = "منخفضه";
        } else {
            humidity = "متوسطة";
        }
        let uvIndex = response.data.uvIndex;
        if (uvIndex > 7) {
            uvIndex = "مرتفعة";
        } else if (uvIndex < 3) {
            uvIndex = "منخفضه";
        } else {
            uvIndex = "متوسطة";
        }

        $('#degree').html(degree);
        $('.degree-progress').css('width', degree + '%')
        $('#humidity').html(humidity);

    });

    //select gender
    let genderVal = false;
    $('.question13 li').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            genderVal = false;
            disable();
        } else {
            $('.question13 li').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
            genderVal = true;
            able();
        }
    })

    //validate name
    let nameVal = false;
    $('#name').keyup(function () {
        let name = $(this).val();
        let regName = /^[a-zA-Z]+ [a-zA-Z]{2,10}$/;
        if (!regName.test(name)) {
            $("#nameAlert").html('برجاء ادخال اسمك');
            nameVal = false;
            disable();
        } else {
            $("#nameAlert").html('');
            nameVal = true;
            able();
        }
    })

    //validate age
    let ageVal = false;
    $('#age').keyup(function () {
        let age = $(this).val();
        if (!isNaN(age) && age > 0 && age <= 100) {
            $("#ageAlert").html('');
            ageVal = true;
            able();
        } else {
            $("#ageAlert").html('برجاء ادخال عمرك');
            ageVal = false;
            disable();
        }
    })

    //validate phone
    let phoneVal = false;
    $('#phone').keyup(function () {
        let phone = $(this).val();
        let regPhone = /^01[0125]{1}[0-9]{8}$/;
        if (!regPhone.test(phone)) {
            $("#phoneAlert").html('برجاء ادخال رقم تلفونك');
            disable();
        } else {
            $("#phoneAlert").html('');
            phoneVal = true;
            able();
        }
    })

    //disable function
    function disable() {
        $("#submit").prop('disabled', true);
    }

    //able function
    function able() {
        if (nameVal && ageVal && phoneVal && genderVal) {
            $("#submit").prop('disabled', false);
        }
    }

})
