import { notFound } from 'next/navigation';

import { categorieItems } from '@/hardcoded/categories';

export default async function SubCategoryPage({ params }: { params: Promise<{ categorie: string, subCategorie: string }> }) {
  const resolvedParams = await params;
  const { categorie, subCategorie } = resolvedParams;

  // Logowanie surowych danych
  console.log("Raw Params:", { categorie, subCategorie });

  // Sprawdzenie, czy params istnieją
  if (!categorie || !subCategorie) {
      console.error("Missing params:", { categorie, subCategorie });
      notFound();
  }

  // Normalizacja
  const normalizedCategorie = categorie.trim().toLowerCase();
  const normalizedSubCategorie = subCategorie.trim().toLowerCase();

  console.log("Normalized Params:", { normalizedCategorie, normalizedSubCategorie });

  const category = categorieItems.find(
      (cat) => cat.label.trim().toLowerCase() === normalizedCategorie
  );

  if (!category) {
      console.error("Category not found:", normalizedCategorie);
      notFound();
  }

  const subCategory = category.categoriesList.find(
      (sub) => sub.label.trim().toLowerCase() === normalizedSubCategorie
  );

  if (!subCategory) {
      console.error("SubCategory not found:", normalizedSubCategorie);
      notFound();
  }

  return (
      <div>
          <h1>{`${category.label} - ${subCategory.label}`}</h1>
      </div>
  );
}


