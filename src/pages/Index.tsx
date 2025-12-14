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
    { day: "Понедельник", time: "19:00", artist: "Acoustic Duo", genre: "Акустика" },
    { day: "Вторник", time: "20:00", artist: "Jazz Quartet", genre: "Джаз" },
    { day: "Среда", time: "19:30", artist: "Rock Cover Band", genre: "Рок" },
    { day: "Четверг", time: "20:00", artist: "Blues Night", genre: "Блюз" },
    { day: "Пятница", time: "21:00", artist: "Pop Hits Live", genre: "Поп" },
    { day: "Суббота", time: "21:00", artist: "Retro Party", genre: "Ретро" },
    { day: "Воскресенье", time: "19:00", artist: "Acoustic Evening", genre: "Акустика" },
  ];

  const menuItems = {
    drinks: [
      { name: "Авторский Мохито", price: "450₽", description: "С домашним сиропом мяты" },
      { name: "Олд Фэшн", price: "550₽", description: "Классический виски-коктейль" },
      { name: "Эспрессо Мартини", price: "500₽", description: "Бодрящий кофейный коктейль" },
      { name: "Крафтовое пиво", price: "350₽", description: "Локальные сорта на выбор" },
    ],
    food: [
      { name: "Брускетта микс", price: "480₽", description: "3 вида на выбор" },
      { name: "Сырная тарелка", price: "680₽", description: "5 видов сыра с медом" },
      { name: "Куриные крылья BBQ", price: "520₽", description: "С фирменным соусом" },
      { name: "Картофель фри", price: "280₽", description: "С чесночным соусом" },
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
              {["home", "about", "gallery", "menu", "schedule"].map((section) => (
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
                Каждый вечер на нашей сцене выступают талантливые музыканты, исполняющие каверы
                любимых хитов. От рока до джаза, от классики до современных треков — у нас звучит
                музыка, понятная всем.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Card className="text-center p-4 bg-muted border-border">
                  <Icon name="Music" size={32} className="mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Живая музыка</p>
                  <p className="text-sm text-muted-foreground">Каждый вечер</p>
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
              "https://cdn.poehali.dev/projects/53b7f04f-914f-4775-8907-af61c06e571e/files/20d68c31-f743-4093-bbd3-8ebcd186794b.jpg",
              "https://cdn.poehali.dev/projects/53b7f04f-914f-4775-8907-af61c06e571e/files/fe96ced2-9993-4d5e-abf4-ecb0d70cdab4.jpg",
              "https://cdn.poehali.dev/projects/53b7f04f-914f-4775-8907-af61c06e571e/files/554866b8-a063-4207-a2bf-4e9f8f0480cc.jpg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg aspect-square animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={img}
                  alt={`Фото ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">
                    {idx === 0 && "Интерьер бара"}
                    {idx === 1 && "Живое выступление"}
                    {idx === 2 && "Авторские коктейли"}
                  </p>
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
                          <h3 className="font-bold text-xl">{event.day}</h3>
                          <p className="text-muted-foreground">{event.time}</p>
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
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={18} className="text-primary" />
                  info@batareika.bar
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Часы работы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Чт: 18:00 - 02:00</p>
                <p>Пт-Сб: 18:00 - 04:00</p>
                <p>Вс: 18:00 - 00:00</p>
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
