import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './modules/layout/components/Header';
import Footer from './modules/layout/components/Footer';
import HomePage from './modules/earnings/components/HomePage';
import CategoryPage from './modules/earnings/components/CategoryPage';
import MethodPage from './modules/earnings/components/MethodPage';
import ResourcesPage from './modules/earnings/components/ResourcesPage';
import ZaptBadge from './modules/core/components/ZaptBadge';
import ScrollToTop from './modules/core/components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/method/:methodId" element={<MethodPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
      <Footer />
      <ZaptBadge />
    </div>
  );
}