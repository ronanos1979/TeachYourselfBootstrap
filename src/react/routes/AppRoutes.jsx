import { Route, Routes } from 'react-router-dom';
import {
  ClearfixProblemPage,
  GridColumnsPage,
  OffsettingOrderingNestingPage,
  ResponsiveWebLayoutPage,
  ThreeColumnLayoutPage,
} from '../pages/Chapter5Pages.jsx';
import { JumbotronPage, LabelsPage } from '../pages/Chapter6Pages.jsx';
import GridPage from '../pages/GridPage.jsx';
import HomePage from '../pages/HomePage.jsx';
import TablesPage from '../pages/TablesPage.jsx';
import TypographyPage from '../pages/TypographyPage.jsx';
import FormsPage from '../pages/FormsPage.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/react/chapter2/grid" element={<GridPage />} />
      <Route path="/react/chapter5/clearfix-problem" element={<ClearfixProblemPage />} />
      <Route path="/react/chapter5/three-column-layout" element={<ThreeColumnLayoutPage />} />
      <Route path="/react/chapter5/grid-columns" element={<GridColumnsPage />} />
      <Route path="/react/chapter5/offsetting-ordering-and-nesting-columns" element={<OffsettingOrderingNestingPage />} />
      <Route path="/react/chapter5/responsive-web-layout" element={<ResponsiveWebLayoutPage />} />
      <Route path="/react/chapter6/labels" element={<LabelsPage />} />
      <Route path="/react/chapter6/jumbotron" element={<JumbotronPage />} />
      <Route path="/react/chapter7/typography" element={<TypographyPage />} />
      <Route path="/react/chapter8/tables" element={<TablesPage />} />
      <Route path="/react/chapter9/forms" element={<FormsPage />} />
    </Routes>
  );
}
