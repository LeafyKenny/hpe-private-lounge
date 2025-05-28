import React, { useEffect, useState } from 'react';
import supabase from '../../supabaseclient';
import { Button } from '../elements/button'; // Adjust path if needed
import { motion } from 'framer-motion';

export default function InfoSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const { data, error } = await supabase.from("cards").select('*');
      if (error) {
        console.error('Error fetching cards:', error);
      } else {
        // Prepend BASE_URL to relative image URLs
        const adjusted = data.map(card => ({
          ...card,
          image_url: card.image_url.startsWith('/')
            ? `${import.meta.env.BASE_URL}${card.image_url.slice(1)}`
            : card.image_url
        }));
        setCards(adjusted);
      }
    }
    fetchCards();
  }, []);

  return (
    <section
      className="mx-auto px-6 py-16 font-metric"
      style={{ backgroundColor: "#073634" }}
    >
      {/* Title centered */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Beförderungsbonus
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white shadow-md p-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.id * 0.1 }}
          >
            <div>
              <img
                src={card.image_url}
                alt={card.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-black mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </div>

            <Button asChild className="mt-4 w-full text-center">
              <a
                href={card.cta_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.cta_text}
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
