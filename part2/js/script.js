$(function () {


// Добавить wrapper

    var html = $('#make_page').html();
    var mk_page = [
        {
          id: 'wrapper',
          class: 'content'
        }
    ];
    var page = tmpl(html, {
        data: mk_page
    });
    $('body').append(page);


// Добавить Персону

    var html = $('#person_object').html();

    var person = [
      {
        class: 'foto',
        name: 'Ivanov Ivan Ivanovich',
        foto: './img/myFace.jpg'
      }
    ];

    var person_line = tmpl(html, {
        data: person
    });

    $('.content').append(person_line);

 // Добавить резюме

    var html = $('#person_skills').html();

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

    var person_skills = tmpl(html, {
        data: skills
    });

    $('.content').append(person_skills);

})