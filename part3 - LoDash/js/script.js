$(function () {

// Добавить wrapper

    var mk_page = {
        id: 'wrapper',
        clas: 'content'
        };

    var shablon = document.getElementById('make_page').innerHTML;
    var tmpl = _.template(shablon);

    var result = tmpl(mk_page);
    $('body').append( result );


// Добавить Персону

    var shablon = document.getElementById('person_object').innerHTML;

    var person = {
        clas_person: 'foto',
        name: 'Ivanov Ivan Ivanovich',
        foto: './img/myFace.jpg'
    }
    var tmpl = _.template(shablon);
    var result = tmpl(person);
    $('.content').append( result );


 // Добавить резюме

    var shablon = document.getElementById('person_skills').innerHTML;

    var skills = [
      {
        class: 'block line',
        p_class: 'text',
        text: ['Студент заборостроительного университета'],
        ul: '0',
        a: '0'
      },
      {
        class: 'block line',
        p_class: 'text',
        text: ['Хочу учить фронтенд, потому что:'],
        ul: '1',
        li: ['Заборы строить не интересно', 'Платят мало', 'Приходится работать по ночам'],
        a: '0'
      },
      {
        class: 'block line',
        p_class: 'text',
        text: ['Мой контактный телефон', '+380222222222', 'Мой профиль вконтакте'],
        ul: '0',
        a: '1',
        a_href: 'http://www.vk.com',
        a_cont: 'vk.com'
      },
      {
        class: 'block',
        p_class: 'text',
        text: ['Мой фидбек:', 'Если нужно, могу построить Вам забор'],
        ul: '0',
        a: '0'
      }
    ];

    var tmpl = _.template(shablon);
    var result = tmpl({skills});
    $('.content').append( result );

})