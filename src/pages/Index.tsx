import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const schedule = [
    { date: "16 января", day: "Пятница", time: "21:00", artist: "Кавер - Disco party", genre: "Лучшие хиты всех времен в современной обработке" },
    { date: "17 января", day: "Суббота", time: "21:00", artist: "Кавер всегда!", genre: "Миксы, каверы, трибьюты хитов от нашего Dj" },
    { date: "23 января", day: "Пятница", time: "21:00", artist: "Техническое открытие Батарейки бара!", genre: "Грандиозное открытие" },
    { date: "24 января", day: "Суббота", time: "21:00", artist: "Cover-Party", genre: "Вечеринка с лучшими каверами" },
  ];

  const menuItems = {
    drinks: [
      { name: "Классический Мохито", price: "650₽", description: "Освежающий коктейль с мятой и лаймом" },
      { name: "Негрони", price: "650₽", description: "Горький итальянский коктейль" },
      { name: "Лонг Айленд Айс Ти", price: "950₽", description: "Крепкий микс из 5 видов алкоголя" },
      { name: "Лагер KRONE 0.5л", price: "450₽", description: "Классическое немецкое пиво" },
    ],
    food: [
      { name: "Цезарь с курицей", price: "670₽", description: "Классический салат с пармезаном" },
      { name: "Феттучине с белыми грибами", price: "650₽", description: "Паста в сливочном соусе" },
      { name: "Утиные крылья в соусе Хой син", price: "650₽", description: "Азиатская кухня" },
      { name: "Фиш & чипс", price: "680₽", description: "Рыба в кляре с картофелем" },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Music" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold">Батарейка</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {["home", "about", "gallery", "menu", "schedule", "location"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-primary transition-colors ${
                    activeSection === section ? "text-primary" : ""
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "about" && "О баре"}
                  {section === "gallery" && "Галерея"}
                  {section === "menu" && "Меню"}
                  {section === "schedule" && "Расписание"}
                  {section === "location" && "Контакты"}
                </button>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.8)), url('https://cdn.poehali.dev/projects/53b7f04f-914f-4775-8907-af61c06e571e/files/20d68c31-f743-4093-bbd3-8ebcd186794b.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">Батарейка</h2>
          <p className="text-2xl md:text-3xl mb-4 text-secondary">Музыкальный кавер-бар</p>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Живая музыка, понятная всем • Уютная атмосфера • Авторские коктейли
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Icon name="MapPin" size={20} className="text-primary" />
              <span>Земляной вал 50а ст3</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => scrollToSection("schedule")}
          >
            Посмотреть расписание
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 animate-fade-in">О баре</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg mb-6 leading-relaxed">
                "Батарейка" — это место, где музыка заряжает энергией, а атмосфера согревает душу.
                Мы создали пространство для тех, кто ценит живое исполнение знакомых песен и
                искреннюю атмосферу.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Каждую неделю на нашей сцене выступают талантливые музыканты, исполняющие каверы
                любимых хитов. От рока до джаза, от классики до современных треков — у нас звучит
                музыка, понятная всем.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Card className="text-center p-4 bg-muted border-border">
                  <Icon name="Music" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Живая музыка</p>
                  <p className="text-sm text-muted-foreground">Каждую неделю</p>
                </Card>
                <Card className="text-center p-4 bg-muted border-border">
                  <Icon name="Users" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Уютная атмосфера</p>
                  <p className="text-sm text-muted-foreground">80 мест</p>
                </Card>
                <Card className="text-center p-4 bg-muted border-border">
                  <Icon name="Wine" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Авторское меню</p>
                  <p className="text-sm text-muted-foreground">Коктейли</p>
                </Card>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/53b7f04f-914f-4775-8907-af61c06e571e/files/fe96ced2-9993-4d5e-abf4-ecb0d70cdab4.jpg"
                alt="Выступление в баре"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { url: "https://cdn.poehali.dev/files/1000010250.jpg", title: "Уютный зал с новогодней атмосферой" },
              { url: "https://cdn.poehali.dev/files/1000010350.jpg", title: "Креативный дизайн санузла" },
              { url: "https://cdn.poehali.dev/files/1000009794.jpg", title: "Музыкальный декор" },
              { url: "https://cdn.poehali.dev/files/1000010188.jpg", title: "Арт-объекты" },
              { url: "https://cdn.poehali.dev/files/1000010248.jpg", title: "Центральный зал" },
              { url: "https://cdn.poehali.dev/files/1000010244.jpg", title: "Уютные столики" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg aspect-square animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Меню</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="Wine" size={32} className="text-primary" />
                Напитки
              </h3>
              <div className="space-y-4">
                {menuItems.drinks.map((item, idx) => (
                  <Card key={idx} className="p-4 bg-muted border-border hover:border-primary transition-colors">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-3xl font-semibold mb-6 flex items-center gap-3">
                <Icon name="UtensilsCrossed" size={32} className="text-primary" />
                Закуски
              </h3>
              <div className="space-y-4">
                {menuItems.food.map((item, idx) => (
                  <Card key={idx} className="p-4 bg-muted border-border hover:border-primary transition-colors">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <span className="text-primary font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Расписание</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((event, idx) => (
                <Card
                  key={idx}
                  className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon name="Calendar" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{event.date}</h3>
                          <p className="text-muted-foreground">{event.day} • {event.time}</p>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-semibold text-lg">{event.artist}</p>
                        <p className="text-accent">{event.genre}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hours" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Часы работы</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-lg font-medium">Понедельник - Четверг</span>
                    <span className="text-lg text-primary font-semibold">11:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-lg font-medium">Пятница</span>
                    <span className="text-lg text-primary font-semibold">11:00 - 06:00</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-lg font-medium">Суббота</span>
                    <span className="text-lg text-primary font-semibold">19:00 - 06:00</span>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={24} className="text-primary mt-1" />
                    <p className="text-muted-foreground">Последний заказ принимается за 30 минут до закрытия. Бронирование столиков по телефону.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Как нас найти</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Адрес</h3>
                    <p className="text-muted-foreground text-lg">Земляной вал 50а ст3</p>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Navigation" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Как добраться</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>М Курская</strong> - 5 минут пешком
                    </p>
                    <p className="text-muted-foreground">
                      <strong>М Чкаловская</strong> - 7 минут пешком
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Часы работы</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Понедельник - Четверг: 11:00 - 23:00</p>
                      <p>Пятница: 11:00 - 06:00</p>
                      <p>Суббота: 19:00 - 06:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Телефон</h3>
                    <a href="tel:+79262457585" className="text-primary text-lg hover:underline">
                      +7 (926) 245-75-85
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <a href="mailto:batareika.klub@mail.ru" className="text-primary text-lg hover:underline">
                      batareika.klub@mail.ru
                    </a>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() =>
                    window.open(
                      "https://yandex.ru/maps/?rtext=~55.7581,37.6600&rtt=auto",
                      "_blank"
                    )
                  }
                >
                  <Icon name="Navigation" size={20} className="mr-2" />
                  Построить маршрут
                </Button>
              </div>
            </div>

            <div className="animate-scale-in h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.660012%2C55.757965&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTM1NDYzMDk2Eki80YDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JfQtdC80LvRj9C90L7QuSDQktCw0LssIDUw0JAg0YHRgtGA0L7QtdC90LjQtSAzIgoNyLsWQhUbHllC&z=17"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: "relative" }}
                title="Карта местоположения бара Батарейка"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Icon name="Music" size={28} className="text-primary" />
                <h3 className="text-2xl font-bold">Батарейка</h3>
              </div>
              <p className="text-muted-foreground">Музыкальный кавер-бар в центре Москвы</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  Земляной вал 50а ст3
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={18} className="text-primary" />
                  +7 (926) 245-75-85
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={18} className="text-primary" />
                  batareika.klub@mail.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Часы работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Четверг: 11:00 - 23:00</p>
                <p>Пятница: 11:00 - 06:00</p>
                <p>Суббота: 19:00 - 06:00</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Батарейка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;