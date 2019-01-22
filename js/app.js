$(document).ready(function () {
  var classActive = 'active';

  $('.animais .tab-menu a').first().addClass(classActive); //adiciona a classe active no primeiro a do menu
  $('.animais .item').first().addClass(classActive); //adiciona a classe active no primeiro item

  $('.animais .tab-menu a').click(function (e) {
    e.preventDefault(); //previne o defalut do link (item clicado)
    var itemId = $(this).attr('href'); //pega o valor do href e guarda na variavel

    $('.animais .tab-menu a, .animais .item').removeClass(classActive); //remove o active de todos os elementos
    $(this).addClass(classActive); //adiciona a classe active no item clicado ( a do .tab-menu)
    $(itemId).addClass(classActive); //adiciona a classe active no itemID clicado
  });


  $('.florestas .tab-menu a').first().addClass(classActive); //adiciona a classe active no primeiro a do menu
  $('.florestas .item').first().addClass(classActive); //adiciona a classe active no primeiro item

  $('.florestas .tab-menu a').click(function (e) {
    e.preventDefault(); //previne o defalut do link (item clicado)
    var itemId = $(this).attr('href'); //pega o valor do href e guarda na variavel

    $('.florestas .tab-menu a, .florestas .item').removeClass(classActive); //remove o active de todos os elementos
    $(this).addClass(classActive); //adiciona a classe active no item clicado ( a do .tab-menu)
    $(itemId).addClass(classActive); //adiciona a classe active no itemID clicado
  });
});
