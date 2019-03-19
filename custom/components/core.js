$(function () {

    var core_deletedIds = [];
    var core_slice = core_deletedIds.slice;


    //  源
    $.createElement = function (optionsArr) {
        var el = $('<' + optionsArr[0].tagName + '>');
        $.each(optionsArr, function (i, item) {
            item.attributes && $.each(item.attributes, function (i, t) {
                el.attr(t.nodeName, t.nodeValue);
            });
            item.classList && $.each(item.classList, function (i, t) {
                el.addClass(t);
            });
            item.bindEvent && $.each(item.bindEvent, function (eventName, handler) {
                el.on(eventName, handler);
            })
        });
        return el;
    };

    $.createDiv = function (options) {
        var basic_options = {
            tagName: 'div',
            attributes: [
                {
                    nodeName: 'id',
                    nodeValue: 'aaa'
                },
            ],
            classList: ['aaa', 'aa'],
        };
        var arr = [basic_options];
        options && arr.push(options);
        return $.createElement(arr);
    };


    var div = $.createDiv({
        attributes: [{
            nodeName: 'id',
            nodeValue: 'myhouse',
        }]
    });
    //console.log(div[0]);
    var div = $.createDiv({
        attributes: [{
            nodeName: 'data-name',
            nodeValue: 'xxxxxxx',
        }]
    });
    //console.log(div[0]);

    //-------------------------------------------------------------------------------


    $.createInput = function (options) {
        var basic_options = {
            tagName: 'input',
            attributes: [
                {
                    nodeName: 'type',
                    nodeValue: 'text'
                },
            ],
            classList: ['input-text', 'valid'],
            bindEvent: {
                focus: function () {
                    $(this).addClass('focus');
                },
                blur: function () {
                    $(this).removeClass('focus');
                }
            }
        };
        var arr = [basic_options];
        options && arr.push(options);
        return $.createElement(arr);
    };

    var input = $.createInput();
    $('.col-xs-8.col-xs-offset-3').append(input);


});