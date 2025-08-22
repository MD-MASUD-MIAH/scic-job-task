import Image from "next/image";
import Link from "next/link";
async function TopMedicine(props) {
  // const data = [
  //   {
  //     id: 1,
  //     name: "Paracetamol",
  //     brand: "Ace",
  //     type: "Tablet",
  //     price: 5,
  //     stock: 200,
  //     description:
  //       "Paracetamol is a widely used medicine for pain relief and reducing fever. It is often recommended for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. It is gentle on the stomach compared to other painkillers, but overdosing can cause serious liver damage.",
  //     expiry_date: "2026-03-15",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "Amoxicillin",
  //     brand: "Amoxil",
  //     type: "Capsule",
  //     price: 12,
  //     stock: 150,
  //     description:
  //       "Amoxicillin is a penicillin-type antibiotic used to treat a wide variety of bacterial infections such as pneumonia, bronchitis, ear infections, and urinary tract infections. It works by stopping the growth of bacteria. It is important to complete the full course to avoid antibiotic resistance.",
  //     expiry_date: "2027-07-10",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "Cetirizine",
  //     brand: "Alergin",
  //     type: "Tablet",
  //     price: 8,
  //     stock: 300,
  //     description:
  //       "Cetirizine is an antihistamine commonly used for allergy relief. It helps reduce sneezing, runny nose, watery eyes, and itching caused by hay fever or other allergies. It is also effective in treating skin hives and itching in chronic urticaria.",
  //     expiry_date: "2025-11-22",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Omeprazole",
  //     brand: "Losec",
  //     type: "Capsule",
  //     price: 15,
  //     stock: 120,
  //     description:
  //       "Omeprazole belongs to a group of drugs called proton pump inhibitors (PPIs). It is used to treat conditions caused by excess stomach acid such as heartburn, gastroesophageal reflux disease (GERD), and stomach ulcers. It provides long-lasting relief by reducing acid production.",
  //     expiry_date: "2026-05-30",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 5,
  //     name: "ORS Solution",
  //     brand: "Orsaline",
  //     type: "Powder",
  //     price: 20,
  //     stock: 500,
  //     description:
  //       "Oral Rehydration Solution (ORS) is a special combination of dry salts that is mixed with clean drinking water. It helps to replenish lost fluids and electrolytes in the body, especially during diarrhea or vomiting. It is a life-saving solution widely used in both adults and children.",
  //     expiry_date: "2028-01-05",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 6,
  //     name: "Metformin",
  //     brand: "Glucophage",
  //     type: "Tablet",
  //     price: 18,
  //     stock: 250,
  //     description:
  //       "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is prescribed for patients with type 2 diabetes, and it works by decreasing glucose production in the liver and improving insulin sensitivity. It is often the first medication given for diabetes management.",
  //     expiry_date: "2027-09-18",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 7,
  //     name: "Azithromycin",
  //     brand: "Zithromax",
  //     type: "Tablet",
  //     price: 25,
  //     stock: 100,
  //     description:
  //       "Azithromycin is a macrolide antibiotic used to treat various bacterial infections, including respiratory infections, skin infections, ear infections, and sexually transmitted diseases. It has a long half-life, which allows for once-daily dosing and shorter treatment courses.",
  //     expiry_date: "2026-12-02",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 8,
  //     name: "Ibuprofen",
  //     brand: "Nurofen",
  //     type: "Tablet",
  //     price: 10,
  //     stock: 180,
  //     description:
  //       "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) that is commonly used for reducing pain, inflammation, and fever. It is effective for headaches, menstrual cramps, muscle pain, and arthritis. Long-term use should be avoided due to possible stomach and kidney side effects.",
  //     expiry_date: "2025-08-12",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 9,
  //     name: "Aspirin",
  //     brand: "Disprin",
  //     type: "Tablet",
  //     price: 6,
  //     stock: 220,
  //     description:
  //       "Aspirin is widely used as a pain reliever and also as a blood thinner to reduce the risk of heart attack and stroke. It works by reducing substances in the body that cause pain, fever, and inflammation. Doctors often prescribe it for long-term use in patients with cardiovascular disease.",
  //     expiry_date: "2026-04-25",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 10,
  //     name: "Loratadine",
  //     brand: "Claritin",
  //     type: "Tablet",
  //     price: 14,
  //     stock: 310,
  //     description:
  //       "Loratadine is a non-drowsy antihistamine used to relieve symptoms of allergies such as runny nose, sneezing, itchy or watery eyes, and itching of the throat or nose. It is also useful in reducing itching and redness caused by chronic skin reactions like hives.",
  //     expiry_date: "2027-01-19",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 11,
  //     name: "Salbutamol",
  //     brand: "Ventolin",
  //     type: "Inhaler",
  //     price: 35,
  //     stock: 90,
  //     description:
  //       "Salbutamol is a bronchodilator that helps open up the airways in the lungs. It is commonly prescribed for asthma, chronic obstructive pulmonary disease (COPD), and other conditions where breathing becomes difficult. It works quickly to relieve wheezing and shortness of breath.",
  //     expiry_date: "2026-09-10",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  //   {
  //     id: 12,
  //     name: "Ranitidine",
  //     brand: "Zantac",
  //     type: "Tablet",
  //     price: 16,
  //     stock: 140,
  //     description:
  //       "Ranitidine was widely used to reduce stomach acid and treat conditions such as heartburn, indigestion, and gastric ulcers. Although less common today due to safety concerns, it is still studied and replaced by safer alternatives like famotidine in many cases.",
  //     expiry_date: "2025-12-05",
  //     image:
  //       "https://i.ibb.co.com/KjWCrJxH/Pfizer-Paracetamol500mg-Film-Coated-Tablets24-Pack.webp",
  //   },
  // ];

  const res = await fetch(`https://next-job-task.vercel.app/api/medicine`, {
    cache: "no-store",
  });

  const json = await res.json();

  const data = json.data;
  return (
    <div className=" w-11/12 mx-auto">
      <div className="py-10 flex  flex-col  items-center gap-4">
        <h1 className="text-center text-xl md:text-4xl font-bold">
          Most Popular Medicines
        </h1>
        <p className="text-center w-10/12 md:max-w-2xl ">
          Here you’ll find the most widely used medicines for fever, pain
          relief, allergies, infections, and more. Chosen for their
          effectiveness and reliability
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.slice(0, 8)?.map((product) => (
          <div
            key={product?._id}
            className="card w-80 bg-base-100 shadow-xl mx-auto my-8 border border-[#ff99c8]"
          >
            <figure className="px-6 pt-6  ">
              <Image
                height={200}
                width={300}
                src={product?.image}
                alt={product?.name}
                className="rounded-xl  h-48 object-contain "
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{product?.name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{product.brand}</span>
                <span className="badge badge-outline">{product?.type}</span>
              </div>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-2xl font-bold">
                  ${product?.price?.toFixed(2)}
                </span>
                <Link
                  href={`/medicine/${product?._id}`}
                  className="btn tom-btn"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMedicine;
