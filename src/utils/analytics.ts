// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
    console.log('GA4 Event:', eventName, eventParams);
  }
};

export const trackPageView = (pagePath: string, pageTitle: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    click_location: location,
  });
};

export const trackNavigation = (destination: string) => {
  trackEvent('navigation_click', {
    destination,
    timestamp: new Date().toISOString(),
  });
};

export const trackScroll = (scrollDepth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: scrollDepth,
  });
};

export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};
