import murmansk from './Murmansk.jpg'
import murmansk2 from './Murmansk2.jpg'
import murmansk3 from './Murmansk3.jpg'
import kazan from './Kazan.jpg'
import kazan2 from './Kazan2.jpg'
import kazan3 from './Kazan3.jpg'
import kizhi from './Kizhi.jpg'
import ruskeala from './Ruskeala.jpg'
import petrozavodsk from './Petrozavodsk.jpg'
import dagestan from './Dagestan.jpg'
import dagestan2 from './Dagestan2.jpg'
import dagestan3 from './Dagestan3.jpg'
import volgograd from './Volgograd.jpg'
import volgograd2 from './Volgograd2.jpg'
import elista from './Elista.jpg'
import elista2 from './Elista2.jpg'
import elista3 from './Elista3.jpg'

export const data = [
    {
        id: 1,
        tourName: "Поохоться за Северным сиянием в Мурманске",
        descriptionMain: "Отправься в погоню за природным чудом. На Кольском полуострове вы увидите фантастическое явление природы — Её величество Аврору. От красок северного сияния захватит дух, вы ощутите мощь планеты и увезете с собой сказочные фотографии. Северное Сияние в Мурманске можно увидеть с начала сентября, до середины апреля. с 2 декабря по 11 января полярная ночь, в это время его можно увидеть не только ночью, но и вечером.",
        description: ["Местные жители могут наблюдать северное сияние невооруженным взглядом уже с 25 августа.", "В Мурманской области обратите внимание на Териберку, Видяево, Полярный.", "Именно электрическая природа лежит в основе происхождения сияния, которое спровоцировано Солнцем, но происходит на Земле"],
        image: [murmansk, murmansk2, murmansk3],
        showMore: false
    },
    {
        id: 2,
        tourName: "Посети древнюю Казань",
        descriptionMain: "Казань — удивительный город, в котором воедино сплелись европейская и азиатская культуры. Его часто называют третьей столицей России. Это город с тысячелетней историей, где рядом с архитектурными шедеврами прошлых веков соседствуют ультрасовременные здания и постройки. Казань чрезвычайно богата на музеи, театры и спортивные объекты. А культурно-исторических достопримечательностей, манящих туристов с разных уголков земли, просто не счесть. Прогуляйтесь по залам Храма всех религий. В Храме Кришны вы послушаете мантры на счастье, любовь и богатство, узнаете о традициях индуизма. Познакомьтесь с национальной татарской кухней, прогуляйтесь по центральным улицам города — Баумана и Кремлевской.",
        description: ["Казань - один из древнейших городов России, расположенный на Средней Волге на реке Казанка", "Благовещенский собор - главный христианский храм Казани и древнейший сохранившийся памятник Кремля", "Улица Баумана в Казани является одной из древнейших. Улица является районом развлечений и торговли с большим количеством магазинов, ресторанов, фонтанов, памятников"],
        image: [kazan, kazan2, kazan3],
        showMore: false
    },
    {
        id: 3,
        tourName: "Республика Карелия - жемчужина Русского Севера",
        descriptionMain: "Карелия славится красивой разнообразной природой. Это экологически чистый край, покрытый хвойными лесами, озерами, реками и скалами. Карелия это белые ночи, рыбалка, сбор ягод и сплавы по рекам летом. Зимой туристов ждут лыжи, собачьи упряжки, снегоходы и белые от снега просторы. Карелия – разная, и в этом ее прелесть. Климат в Карелии такой, что можно приезжать и зимой, и летом – путешественнику всегда будет, чем заняться. ",
        description: ["Кижи – это не просто название острова в Онежском озере, а синоним уникальной красоты, которую сумели создать из дерева русские зодчие в 18 веке. Сверкающие под северным солнцем Преображенская и Покровская церкви – символ всей русской деревянной архитектуры. Чтобы увидеть эти памятники, входящие в список Всемирного наследия ЮНЕСКО, в Карелию едут туристы со всего мира", "Одно из самых ярких и удивительных мест Карелии – горный парк Рускеала – уникальный памятник природы и истории горного дела. Главной точкой притяжения Горного парка является Мраморный каньон. Старинный каменный карьер, который разрабатывался почти три века, теперь оборудован для туристов, интересующихся историческим наследием и невероятно живописными видами", "Петрозаводск -  столица республики Карелия. Город, само название которого, говорит о славной эпохе Петра I. в 17-ом веке стал промышленным центром русского Севера, однако теперь большее внимание посвящается культурному наследию. В наши дни, гуляя по городу, есть на что посмотреть – это набережная скульптур, множество старинных архитектурных памятников, а так же интересные музеи"],
        image: [kizhi, ruskeala, petrozavodsk],
        showMore: false
    },
    {
        id: 4,
        tourName: "Исследуй головокружительный Дагестан",
        descriptionMain: "Дагестан — это величественные пики Большого Кавказа, бурные горные реки, живописные аулы. В то же время Дагестан — это удивительное этническое и культурное разнообразие. Здесь на совсем небольшой территории собрано около 35 отдельных этнолингвистических групп; и каких только языков (включая персидский) ни услышишь в Дагестане! Дагестан — край для любителей приключений: здесь их ждут невероятные природные красоты, впечатляющие исторические и культурные памятники, а ещё — радушие и гостеприимство местных жителей.",
        description: ["Дербент — прекрасный старый город в Дагестане, в 130 км от Махачкалы, на берегу Каспия. Настолько старый, что его считают одним из старых ныне «живых» городов на свете. Старый город Дербента признан ЮНЕСКО объектом всемирного наследия человечества. Одна из главнейших достопримечательностей города — это комплекс старой крепости, которая с успехом служила Дербенту (правда, разным его хозяевам) полтора тысячелетия подряд", "Сулакский каньон — одна из самых ярких и захватывающих природных достопримечательностей Дагестана. Он протянулся на десятки километров к северу от Гимринского хребта, где берет свое начало река Сулак. Существенно уступая Гранд-каньону в длине, Сулакский каньон чуть глубже него и уж точно не менее живописен.", "Давно брошенный жителями аул Гамсутль стоит на горной вершине неподалеку от села Чох. Среди скопления опустевших домов и улиц «дагестанского Мачу-Пикчу» гуляют лишь ветер да редко забредающие сюда туристы. История поселения насчитывает около 1600 лет, поэтому здесь сохранились артефакты разных эпох и религий: христианские кресты соседствуют со звездами Давида и высеченными цитатами на персидском языке."],
        image: [dagestan, dagestan2, dagestan3],
        showMore: false
    },
    {
        id: 5,
        tourName: "Город-герой Волгоград и город Элиста - дочь калмыцких степей",
        descriptionMain: "Волгоград находится на правом берегу реки Волга. Это самый длинный город России, его длина составляет почти 100 километров! Волгограду присуждено звание города-героя, именно здесь проходила знаменитая Сталинградская битва, сыгравшая ключевую роль в ходе Великой Отечественной войны. Из Волгограда вы можете осуществить тур-поездку в Республику Калмыкия. Калмыкия – один из самых интересных регионов, входящих в состав России. На обширной территории Калмыкии расположено множество достопримечательностей и уникальных мест. ",
        description: ["Безусловно, самым известным памятником и гордостью Волгограда является историко-мемориальный комплекс «Героям Сталинградской битвы на Мамаевом кургане». На весь мир знаменит монумент «Родина-Мать зовёт», венчающий этот комплекс. Это одна из самых высоких в мире скульптур, общая высота ее составляет 85 м.", "Волгоградский скоростной трамвай, или, как его еще называют, метротрамвай, можно назвать уникальным видом транспорта. Это по сути гибрид метро и трамвая: большая часть маршрута двухвагонных составов пролегает под землей (наземных станций всего две). Этот вариант можно считать универсальным: при необходимости подземные участки пути можно переоборудовать в полноценную линию метро.", "Золотая обитель Будды Шакьямуни - самый большой буддийский храм Калмыкии. Возведён в Элисте, освящён в 2005 году. Внутри установлена статуя Будды высотой в 10 метров. Входы располагаются по всем сторонам света. Обитель обнесена оградой, в неё встроено 108 ступ белого цвета. Также вокруг построены 17 пагод, а в них – статуи великих учителей буддистского монастыря Наланда. Главные реликвии: волосы Ламы Цонкапы, одежда Далай-ламы XIV", "Цветение лотосов - длится это великолепие в общей сложности примерно месяц с середины июля до середины августа. Однако каждый отдельный бутон цветёт всего пару дней. Основные места, где можно понаблюдать за лотосами в Калмыкии – дельта Волги. Сюда устраивают выездные экскурсии из Элисты и других городов. Срывать цветки нельзя, к тому же они вянут прямо на глазах, если нарушить запрет", "Памятник Остапу Бендеру - установлен в 1999 году в Элисте. Связан с прошедшей годом ранее здесь олимпиадой по шахматам. Скульптура отлита из бронзы. Вокруг площадки расставлены 12 стульев, перед каждым столик. Можно при желании провести сеанс одновременной игры сразу с 12 оппонентами. Выбор места для изваяния Остапа неслучаен, здесь в 15-летнем возрасте Кирсан Илюмжинов возглавил шахматную калмыцкую сборную."],
        image: [volgograd, volgograd2, elista, elista2, elista3],
        showMore: false
    }
]