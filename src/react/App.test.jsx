import { render, screen } from '@testing-library/react';
import App from './App.jsx';

describe('App', () => {
  it('renders the React chapter index', () => {
    window.history.pushState({}, '', '/');
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Teach Yourself Bootstrap' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Styling Tables' })[0]).toHaveAttribute('href', '/react/chapter8/tables');
    expect(screen.getAllByRole('link', { name: 'Grid' })[0]).toHaveAttribute('href', '/react/chapter2/grid');
    expect(screen.getAllByText('Chapter 2 - The Grid')[0]).toBeInTheDocument();
  });

  it('renders the shared chapter dropdown in the React header', () => {
    window.history.pushState({}, '', '/react/chapter8/tables');
    render(<App />);

    expect(screen.getByRole('button', { name: /Chapters 1-6/ })).toHaveClass('dropdown-toggle');
    expect(screen.getByRole('button', { name: /Chapters 7-12/ })).toHaveClass('dropdown-toggle');
    expect(screen.queryByRole('button', { name: /^Chapters$/ })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'Responsive Web Layout' })[0]).toHaveAttribute('href', '/react/chapter5/responsive-web-layout');
    expect(screen.getAllByRole('link', { name: 'Forms' })[0]).toHaveAttribute('href', '/react/chapter9/forms');
    expect(screen.getAllByRole('link', { name: 'The Bootstrap Theme' })[0]).toHaveAttribute('href', '/chapter3/the_bootstrap_theme.html');
    expect(screen.getAllByText('Chapter 8 - Styling Tables')[0]).toBeInTheDocument();
  });

  it('renders the converted Chapter 2 grid page through React routing', () => {
    window.history.pushState({}, '', '/react/chapter2/grid');
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Basic Grid System' })).toBeInTheDocument();
    expect(screen.getAllByText('.col-md-1')).toHaveLength(12);
    expect(screen.getByText('.col-md-12')).toBeInTheDocument();
  });

  it('routes to converted Chapter 5 through Chapter 8 pages', () => {
    const examples = [
      ['/react/chapter5/clearfix-problem', 'The ClearFix Problem'],
      ['/react/chapter5/three-column-layout', 'Three Column Layout'],
      ['/react/chapter5/grid-columns', 'Bootstrap Grid: The 12-Column System'],
      ['/react/chapter5/offsetting-ordering-and-nesting-columns', 'Offsetting and Ordering Columns'],
      ['/react/chapter5/responsive-web-layout', 'Responsive Web Layout'],
      ['/react/chapter6/labels', 'A Label Bootstrap Page'],
      ['/react/chapter6/jumbotron', 'This is a Jumbotron'],
      ['/react/chapter7/typography', 'Typography'],
      ['/react/chapter8/tables', 'Bootstrap Starter Template'],
      ['/react/chapter9/forms', 'Forms'],
    ];

    examples.forEach(([path, heading]) => {
      window.history.pushState({}, '', path);
      const { unmount } = render(<App />);

      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument();
      unmount();
    });
  });
});
