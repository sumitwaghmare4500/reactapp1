import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<ExpenseItem
id={expense[0].id}
title={expense[0].title}
amount={expense[0].amount}
location={expense[0].location}
date={expense[0].date}
/>
<ExpenseItem
 id={expense[1].id}
title={expense[1].title}
amount={expense[1].amount}
location={expense[1].location}
date={expense[1].date}
/>
<ExpenseItem
 id={expense[2].id}
title={expense[2].title}
amount={expense[2].amount}
location={expense[2].location}
date={expense[2].date}
/>
<ExpenseItem
 id={expense[3].id}
title={expense[3].title}
amount={expense[3].amount}
location={expense[3].location}
date={expense[3].date}
/> 