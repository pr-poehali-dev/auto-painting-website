import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://cdn.poehali.dev/files/e61c5f1a-6ba4-4514-9bd7-511064a9fcca.png" 
              alt="PragmatMaster" 
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Главная</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">О компании</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Профессиональная покраска автомобилей
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Полная покраска автомобилей любой сложности. 
            Восстановим первоначальный блеск вашего авто с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4">
              <Icon name="Eye" className="mr-2" size={20} />
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-slate-400 text-lg">Специализируемся на полной покраске автомобилей</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Полная покраска кузова</h3>
                <p className="text-slate-400">
                  Качественная покраска всего автомобиля с подготовкой поверхности и защитными покрытиями
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Устранение дефектов</h3>
                <p className="text-slate-400">
                  Ремонт царапин, вмятин, коррозии и других повреждений кузова перед покраской
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Защитное покрытие</h3>
                <p className="text-slate-400">
                  Нанесение защитных составов для долговечности покрытия и блеска
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-slate-400 text-lg">Примеры наших лучших работ по покраске автомобилей</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 overflow-hidden group">
              <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <img 
                  src="/img/d1a3b0be-e023-4287-8dcc-a0556ffa1b35.jpg" 
                  alt="BMW X5 покраска"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">BMW X5 - Полная покраска</h3>
                <p className="text-slate-400 text-sm">Восстановление заводского покрытия после ДТП</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 overflow-hidden group">
              <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <img 
                  src="/img/0b9b2da1-4713-491e-ad75-da171071f66e.jpg" 
                  alt="Mercedes C-Class реставрация"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Mercedes C-Class - Реставрация</h3>
                <p className="text-slate-400 text-sm">Устранение коррозии и полная покраска кузова</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700 overflow-hidden group">
              <div className="aspect-video bg-slate-700 relative overflow-hidden">
                <img 
                  src="/img/9087818e-a2e0-42d5-a289-fcdfa4db3351.jpg" 
                  alt="Audi A4 смена цвета"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">Audi A4 - Смена цвета</h3>
                <p className="text-slate-400 text-sm">Изменение цвета кузова по желанию клиента</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании PragmatMaster</h2>
              <p className="text-slate-300 text-lg mb-6">
                Мы специализируемся на профессиональной покраске автомобилей уже более 10 лет. 
                Наша команда опытных мастеров использует только качественные материалы и современное оборудование.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-slate-300">Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-slate-300">Современное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-slate-300">Качественные материалы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-500" />
                  <span className="text-slate-300">Опытные мастера</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">Почему выбирают нас?</h3>
              <ul className="space-y-3 text-slate-300">
                <li>✨ Индивидуальный подход к каждому автомобилю</li>
                <li>🔧 Современные технологии покраски</li>
                <li>🎨 Широкая палитра цветов и оттенков</li>
                <li>⏱️ Соблюдение сроков выполнения работ</li>
                <li>💯 Гарантия качества результата</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-slate-400 text-lg">Свяжитесь с нами для консультации и записи</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Телефон</h3>
                  <p className="text-slate-400">+7 (999) 123-45-67</p>
                  <p className="text-slate-400">+7 (999) 987-65-43</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-slate-400">info@pragmatmaster.ru</p>
                  <p className="text-slate-400">order@pragmatmaster.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Адрес</h3>
                  <p className="text-slate-400">г. Москва, ул. Автомобильная, 25</p>
                  <p className="text-slate-400">ПН-ПТ: 9:00-19:00, СБ: 10:00-16:00</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">Записаться на консультацию</h3>
                <div className="text-center">
                  <div className="bg-slate-800 p-6 rounded-lg mb-6">
                    <Icon name="Clock" size={48} className="text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-300 mb-2">Бесплатная консультация</p>
                    <p className="text-slate-400 text-sm">Оценим объем работ и рассчитаем стоимость</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Позвонить сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/e61c5f1a-6ba4-4514-9bd7-511064a9fcca.png" 
                alt="PragmatMaster" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-slate-400">
                Профессиональная покраска автомобилей с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Полная покраска кузова</li>
                <li>Устранение дефектов</li>
                <li>Защитное покрытие</li>
                <li>Реставрация покрытия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@pragmatmaster.ru</p>
                <p>г. Москва, ул. Автомобильная, 25</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500">&copy; 2024 PragmatMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;