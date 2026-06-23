import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SLIDES = [
  {
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/45db0e4b-8029-4965-a14f-60ba9781d23f.jpg',
    title: 'Экскурсии на любой вкус, возраст и кошелёк',
  },
  {
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/3925acea-a03d-499e-9fc6-f309a7be7c3b.jpg',
    title: 'Эксклюзивные авторские экскурсии',
  },
  {
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/999570fd-8557-4198-a3c8-5eff7a79346b.jpg',
    title: 'Широкая география путешествий',
  },
  {
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/45db0e4b-8029-4965-a14f-60ba9781d23f.jpg',
    title: 'Демократичные цены',
  },
];

const NAV = [
  { id: 'about', label: 'О проекте' },
  { id: 'tours', label: 'Экскурсии под заказ' },
  { id: 'schedule', label: 'Расписание экскурсий' },
  { id: 'rules', label: 'Правила участия' },
  { id: 'gift', label: 'Сертификаты' },
  { id: 'promo', label: 'Акции' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SCHEDULE = [
  {
    title: 'Жемчужины Ставрополья',
    date: '12 июля',
    price: 'от 4 900 ₽',
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/999570fd-8557-4198-a3c8-5eff7a79346b.jpg',
  },
  {
    title: 'Вечерняя Москва с реки',
    date: '15 июля',
    price: 'от 1 800 ₽',
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/3925acea-a03d-499e-9fc6-f309a7be7c3b.jpg',
  },
  {
    title: 'Красная площадь и Кремль',
    date: '18 июля',
    price: 'от 1 200 ₽',
    img: 'https://cdn.poehali.dev/projects/a601b053-4e85-40db-9efa-893406427c09/files/45db0e4b-8029-4965-a14f-60ba9781d23f.jpg',
  },
];

const TOUR_TYPES = [
  { value: 'city', label: 'Пешеходная по Москве', base: 1200 },
  { value: 'bus', label: 'Автобусная экскурсия', base: 1800 },
  { value: 'author', label: 'Авторская эксклюзивная', base: 3500 },
  { value: 'region', label: 'Путешествие по регионам', base: 4900 },
];

const AGE_GROUPS = [
  { value: 'adult', label: 'Взрослый', mult: 1 },
  { value: '14', label: '14 лет', mult: 0.85 },
  { value: '12-13', label: '12–13 лет', mult: 0.7 },
  { value: 'child', label: 'До 12 лет', mult: 0.5 },
];

const REVIEWS = [
  { name: 'Ольга М.', text: 'Авторская экскурсия превзошла все ожидания! Гид — настоящий знаток города.', rating: 5 },
  { name: 'Дмитрий К.', text: 'Ездили семьёй в Ставрополье. Отличная организация и демократичные цены.', rating: 5 },
  { name: 'Анна В.', text: 'Вечерняя Москва с реки — это волшебство. Спасибо «Любимой Москве»!', rating: 5 },
];

function Slider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % SLIDES.length), 10000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        </div>
      ))}
      <div className="container relative z-10 flex h-full flex-col items-start justify-end pb-20 text-white">
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl animate-slide-fade">
          Любимая Москва
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-2xl animate-fade-in">
          {SLIDES[active].title}
        </p>
        <Button
          size="lg"
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Выбрать экскурсию
          <Icon name="ArrowRight" size={18} className="ml-2" />
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${i === active ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scroll('home')} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <Icon name="MapPin" size={20} />
          </div>
          <span className="font-display text-lg font-extrabold text-primary">Любимая Москва</span>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scroll(n.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Меню">
          <Icon name={open ? 'X' : 'Menu'} size={26} />
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t bg-white p-4 lg:hidden">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scroll(n.id)}
              className="rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-secondary"
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Calculator() {
  const [type, setType] = useState('city');
  const [age, setAge] = useState('adult');
  const [count, setCount] = useState(2);
  const [date, setDate] = useState('');

  const base = TOUR_TYPES.find((t) => t.value === type)?.base ?? 0;
  const mult = AGE_GROUPS.find((a) => a.value === age)?.mult ?? 1;
  const total = Math.round(base * mult * count);

  return (
    <Card className="overflow-hidden border-primary/20 shadow-xl">
      <div className="bg-primary px-6 py-4">
        <h3 className="flex items-center gap-2 font-display text-xl font-bold text-white">
          <Icon name="Calculator" size={22} /> Калькулятор стоимости тура
        </h3>
      </div>
      <CardContent className="grid gap-5 p-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Тип экскурсии</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {TOUR_TYPES.map((t) => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Возраст участника</Label>
          <Select value={age} onValueChange={setAge}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {AGE_GROUPS.map((a) => (
                <SelectItem key={a.value} value={a.value}>{a.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Количество участников</Label>
          <Input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
          />
        </div>
        <div className="space-y-2">
          <Label>Дата экскурсии</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="md:col-span-2 flex flex-col items-center justify-between gap-4 rounded-lg bg-secondary p-5 sm:flex-row">
          <div>
            <p className="text-sm text-muted-foreground">Предварительная стоимость</p>
            <p className="font-display text-3xl font-extrabold text-primary">{total.toLocaleString('ru-RU')} ₽</p>
          </div>
          <Button className="w-full sm:w-auto" size="lg">
            <Icon name="Send" size={18} className="mr-2" /> Оставить заявку
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ReviewUpload() {
  const [files, setFiles] = useState<string[]>([]);
  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    const valid = list.filter((f) => f.size <= 5 * 1024 * 1024);
    setFiles((prev) => [...prev, ...valid.map((f) => f.name)].slice(0, 5));
  };
  return (
    <div className="rounded-lg border border-dashed border-primary/40 bg-white p-5">
      <p className="mb-3 flex items-center gap-2 font-display font-semibold text-primary">
        <Icon name="Camera" size={20} /> Добавить фото с экскурсии
      </p>
      <p className="mb-3 text-sm text-muted-foreground">До 5 фото, каждое не более 5 МБ.</p>
      <Input type="file" accept="image/*" multiple onChange={onSelect} disabled={files.length >= 5} />
      {files.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-foreground">
          {files.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Icon name="Image" size={14} className="text-primary" /> {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Slider />

      {/* О проекте */}
      <section id="about" className="py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">О проекте</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            «Любимая Москва» — это команда увлечённых гидов и путешественников. Мы создаём экскурсии
            на любой вкус, возраст и кошелёк: от классических прогулок по столице до эксклюзивных
            авторских маршрутов и путешествий по регионам России.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { icon: 'Sparkles', t: 'Авторские маршруты', d: 'Эксклюзивные программы, которых нет больше нигде' },
              { icon: 'Map', t: 'Широкая география', d: 'Москва, Подмосковье и регионы России' },
              { icon: 'Wallet', t: 'Демократичные цены', d: 'Экскурсии на любой бюджет' },
            ].map((c) => (
              <Card key={c.t} className="border-primary/10 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icon name={c.icon} size={26} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Экскурсии под заказ + калькулятор */}
      <section id="tours" className="bg-primary py-20 text-white">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            Экскурсии под заказ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-white/85">
            Полный репертуар «Любимой Москвы». Рассчитайте стоимость с учётом числа участников,
            возраста и даты.
          </p>
          <div className="mx-auto mt-10 max-w-3xl">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            Расписание экскурсий
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-primary" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {SCHEDULE.map((s) => (
              <Card key={s.title} className="overflow-hidden transition-shadow hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Calendar" size={15} /> {s.date}
                    </span>
                    <span className="font-semibold text-primary">{s.price}</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" className="flex-1">Записаться</Button>
                    <Button size="sm" variant="outline" className="flex-1">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Правила */}
      <section id="rules" className="bg-secondary py-20">
        <div className="container max-w-3xl">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">
            Правила участия в экскурсиях
          </h2>
          <div className="mx-auto mt-4 mb-8 h-1 w-20 rounded bg-primary" />
          <Accordion type="single" collapsible className="rounded-lg bg-white px-6 shadow-sm">
            {[
              { q: 'Как записаться на экскурсию?', a: 'Выберите экскурсию в расписании, нажмите «Записаться» и заполните анкету с указанием числа участников.' },
              { q: 'Можно ли отменить или перенести запись?', a: 'Да, отмена возможна не позднее чем за 48 часов до начала экскурсии.' },
              { q: 'Дети и сопровождение', a: 'Дети до 12 лет участвуют только в сопровождении взрослых. Для групп 12–13 и 14 лет действуют отдельные тарифы.' },
              { q: 'Что взять с собой?', a: 'Удобную обувь, одежду по погоде и хорошее настроение.' },
            ].map((r, i) => (
              <AccordionItem key={i} value={`r${i}`}>
                <AccordionTrigger className="text-left font-display">{r.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{r.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Сертификаты + Акции */}
      <section id="gift" className="py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden border-primary/20">
            <div className="bg-gradient-to-br from-primary to-sky p-8 text-white">
              <Icon name="Gift" size={40} />
              <h2 className="mt-4 font-display text-2xl font-extrabold">Подарочный сертификат</h2>
              <p className="mt-2 text-white/90">
                Подарите близким незабываемое путешествие. Сертификат на любую сумму и любую экскурсию.
              </p>
              <Button variant="secondary" className="mt-6">Купить сертификат</Button>
            </div>
          </Card>
          <Card id="promo" className="overflow-hidden border-primary/20">
            <div className="bg-white p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary">
                <Icon name="Percent" size={22} />
              </div>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                Акции и спецпредложения
              </h2>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="mt-0.5 text-primary" />
                  Скидка 10% при записи группы от 5 человек
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="mt-0.5 text-primary" />
                  Дети до 12 лет — со скидкой 50%
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="mt-0.5 text-primary" />
                  Каждая 5-я экскурсия — в подарок
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="bg-secondary py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-extrabold sm:text-4xl">Отзывы</h2>
          <div className="mx-auto mt-4 mb-10 h-1 w-20 rounded bg-primary" />
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <Card key={r.name} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} fallback="Star" />
                    ))}
                  </div>
                  <p className="mt-3 text-foreground">{r.text}</p>
                  <p className="mt-4 font-display font-semibold text-primary">{r.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <ReviewUpload />
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Контакты и обратная связь</h2>
            <div className="mt-4 h-1 w-20 rounded bg-primary" />
            <div className="mt-8 space-y-4 text-foreground">
              <p className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" /> +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-primary" /> info@favorite-moscow.ru
              </p>
              <p className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-primary" /> Москва, ул. Тверская, 1
              </p>
            </div>
          </div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2">
                <Label>Ваше имя</Label>
                <Input placeholder="Иван Иванов" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="you@mail.ru" />
              </div>
              <div className="space-y-2">
                <Label>Сообщение</Label>
                <Textarea placeholder="Ваш вопрос или пожелание" rows={4} />
              </div>
              <Button className="w-full" size="lg">
                <Icon name="Send" size={18} className="mr-2" /> Отправить
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-primary py-8 text-center text-white">
        <p className="font-display text-lg font-bold">Любимая Москва</p>
        <p className="mt-1 text-sm text-white/70">© 2026 Авторские экскурсии и путешествия</p>
      </footer>
    </div>
  );
};

export default Index;
