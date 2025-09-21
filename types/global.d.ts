
interface Window {
  gtag?: (
    type: 'event',
    eventAction: string,
    fieldObject: {
      [key: string]: any;
    }
  ) => void;
}
