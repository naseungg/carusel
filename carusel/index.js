
let arr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
    'https://img.freepik.com/photos-gratuite/couleurs-neons-brillantes-brillent-cameleon-sauvage_23-2151682804.jpg',
    'https://img.freepik.com/photos-gratuite/cameleon-gros-plan-dans-nature_23-2151724892.jpg',
] 

// Аргументами передается массив с ссылками на изображения и уникальный id (у каждого нового слайдера, должен быть уникальный ID)
let carusel1 = newCarusel(['img/101.jpg', 'img/102.jpg', 'img/103.jpg'], 'slider1');
let carusel2 = newCarusel(arr, 'slider2');


// При создании новой карусели, нужно вызывать метод start();
carusel1.start();
carusel2.start();
carusel3.start();

