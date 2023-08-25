
import UniqueHash from "../security/hashes";

export default function Render() {
  // Get Render's ID
  const ClockDiv = document.getElementById('container') as HTMLDivElement | null;
  const ClockWork = document.getElementById('clockwork') as HTMLDivElement | null;

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    ClockDiv?.setAttribute('id',UniqueHash())
    ClockWork?.setAttribute('id',UniqueHash())
  });

  // Render the JS Component

  ClockDiv == ClockDiv;
  ClockWork == ClockWork;

}
