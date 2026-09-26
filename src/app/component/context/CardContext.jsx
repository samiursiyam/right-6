'use client';
import React, { createContext, useState, useEffect } from 'react';

export const CardContext = createContext({});

const CardProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);

  // Load from localStorage (once)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const p = localStorage.getItem('fitlog_plan');
      const s = localStorage.getItem('fitlog_saved');
      const d = localStorage.getItem('fitlog_done');
      if (p) setPlan(JSON.parse(p));
      if (s) setSaved(JSON.parse(s));
      if (d) setDone(JSON.parse(d));
    } catch (e) {
      console.warn('Failed to load localStorage:', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => { localStorage.setItem('fitlog_plan', JSON.stringify(plan)); }, [plan]);
  useEffect(() => { localStorage.setItem('fitlog_saved', JSON.stringify(saved)); }, [saved]);
  useEffect(() => { localStorage.setItem('fitlog_done', JSON.stringify(done)); }, [done]);

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id && item._id !== id));
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id && item._id !== id));
  };

  const removeFromDone = (id) => {
    setDone((prev) => prev.filter((item) => item.id !== id && item._id !== id));
  };

  // Toggle: returns true if newly marked done, false if unmarked
  const markAsDone = (item) => {
    const key = item.id || item._id;
    const exists = done.some((i) => (i.id || i._id) === key);
    if (exists) {
      setDone((prev) => prev.filter((i) => (i.id || i._id) !== key));
      return false;
    } else {
      setDone((prev) => [...prev, item]);
      return true;
    }
  };

  const isDone = (item) => {
    const key = item?.id || item?._id;
    return done.some((i) => (i.id || i._id) === key);
  };

  const shareData = {
    plan, setPlan,
    saved, setSaved,
    done, setDone,
    removeFromPlan,
    removeFromSaved,
    removeFromDone,
    markAsDone,
    isDone,
  };

  return (
    <CardContext.Provider value={shareData}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;