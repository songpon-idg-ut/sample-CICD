import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 flex items-center">
              <h1 id="title" class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Sample CICD App
              </h1>
            </div>
            <nav id="nav-menu" class="hidden md:flex space-x-8">
              <ul class="flex space-x-6">
                <li><a href="#" class="text-slate-500 hover:text-indigo-600 transition-colors font-medium">Home</a></li>
                <li><a href="#" class="text-slate-500 hover:text-indigo-600 transition-colors font-medium">Features</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        <!-- Hero & Login Section -->
        <section class="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-900/5 p-8 transition-all hover:shadow-2xl">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-2">Welcome Back</h2>
            <p class="text-slate-500">Sign in to access your dashboard</p>
          </div>
          
          <div id="login-form" class="space-y-6">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input type="text" id="username" placeholder="Username" 
                class="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input type="password" id="password" placeholder="Password" 
                class="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-shadow">
            </div>
            <button id="submit-btn" type="submit" 
              class="flex w-full justify-center rounded-lg bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform active:scale-95">
              Sign in
            </button>
          </div>
        </section>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section id="feature-a" class="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
            <div class="relative">
              <h3 class="text-lg font-semibold leading-7 text-slate-900 group-hover:text-indigo-600 transition-colors">Feature A</h3>
              <p class="mt-2 text-base leading-7 text-slate-600">Feature A Content. Experience seamless integration and high performance.</p>
            </div>
          </section>

          <section id="feature-b" class="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300"></div>
            <div class="relative">
              <h3 class="text-lg font-semibold leading-7 text-slate-900 group-hover:text-cyan-600 transition-colors">Feature B</h3>
              <p class="mt-2 text-base leading-7 text-slate-600">Feature B Content. Advanced analytics and real-time monitoring at your fingertips.</p>
            </div>
          </section>
        </div>
      </main>

      <!-- Footer -->
      <footer id="footer" class="bg-slate-900 border-t border-slate-800 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p class="text-center text-xs leading-5 text-slate-400">&copy; 2024 Sample CICD. All rights reserved.</p>
        </div>
      </footer>

      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Sample CICD App');
}
