const mockUsers = [
  {
    id: 1,
    email: 'user@gmail.com',
    login: 'user123',
    password: 'password123'
  }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  async login(credentials) {
    await delay(1000);

    const user = mockUsers.find(u =>
      (u.email === credentials.login || u.login === credentials.login) &&
      u.password === credentials.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        email: user.email,
        login: user.login
      }));
      localStorage.setItem('isAuthenticated', 'true');

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          login: user.login
        }
      };
    } else {
      throw new Error('Невірний логін або пароль');
    }
  },


  async register(userData) {
    await delay(1000);

    const existingUser = mockUsers.find(u =>
      u.email === userData.email || u.login === userData.login
    );

    if (existingUser) {
      throw new Error('Користувач з таким email або логіном вже існує');
    }

    if (userData.password !== userData.confirmPassword) {
      throw new Error('Паролі не співпадають');
    }

    const newUser = {
      id: mockUsers.length + 1,
      email: userData.email,
      login: userData.login,
      password: userData.password
    };

    mockUsers.push(newUser);

    localStorage.setItem('currentUser', JSON.stringify({
      id: newUser.id,
      email: newUser.email,
      login: newUser.login
    }));
    localStorage.setItem('isAuthenticated', 'true');

    return {
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        login: newUser.login
      }
    };
  },

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAuthenticated');
    return { success: true };
  },

  isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
  },

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
};
