// 1. Получить список компаний ////////// и благополучно запнемся тут же
// 2. Вывести  список в .wrapper__list__inf
// 3. Посчитать общее количество компаний
// 4. Вывести количество в .wrapper__tottal__inf
// 5. Построить груговую диаграмму отображающую сегментацию по странам в .wrapper__location__inf
// 6. Получить список новостей
// 7. Вывести новости в wrapper__news__inf через слайдер
// 8. Dывод Company Parthners 

"use strict";
$( document ).on('ready', function () {
    $.ajax({
            url: "http://codeit.pro/frontTestTask/company/getList",
            type: "GET",
            async: false,
            success: function (data) {
                $('.loader').hide();
                companyList = data.list;
                $('#total').append(($('<p>', {
                    html: data.list.length
                })));

                $.each(data.list, function () {
                    $('#list').append($('<ul>', {
                            class: "list"
                        })
                        .append($('<li>')
                            .append($('<a>', {
                                html: this.name,
                                class: "company"
                            }))));
                });
                countries();
                countryPercent();
            }
        });
  });