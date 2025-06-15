import { Chat } from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-poppins relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-4xl animate-bounce-slow opacity-20">🍿</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-pulse opacity-20">🎬</div>
      <div className="absolute top-1/3 right-1/4 text-3xl animate-pulse opacity-10">🎞️</div>
      
      {/* Header */}
      <header className="py-6 px-4 bg-gradient-to-r from-primary-dark to-secondary shadow-lg">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="text-2xl md:text-3xl">🎬</span> Movie Chatbot
          </h1>
          <p className="text-gray-200 mt-2 text-center">Your friendly movie recommendation assistant</p>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-dark/30 rounded-xl shadow-xl overflow-hidden border border-white/10">
          <Chat />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-4 text-center text-gray-400 text-sm">
        <p>Made with ❤️ for movie lovers</p>
      </footer>
    </div>
  );
}

export default App;
