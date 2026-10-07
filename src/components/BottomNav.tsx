import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <Home size={24} />
        <span>Início</span>
      </NavLink>
      <NavLink to="/workout" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <Dumbbell size={24} />
        <span>Treino</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
        <User size={24} />
        <span>Perfil</span>
      </NavLink>
    </nav>
  );
}