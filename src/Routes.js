import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/reports" component={Reports} />
    </Switch>
  );
}
