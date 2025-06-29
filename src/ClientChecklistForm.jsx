// import { useState, useEffect } from 'react'
// import { db, auth } from "./firebase"
// import { doc, getDoc, setDoc } from "firebase/firestore"
// import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useRef } from "react";


// const checklist = {
//     "Project Discovery": [
//         "Client filled project intake form / brief",
//         "Intial meeting held (goals, audience, preferences)",
//         "Competitors websites reviewed",
//         "Client provided branding assests (logo, fonts, colors",
//         "Site objectives clearly defined"
//     ]
// }

// function ClientChecklistForm() {
//     const [checked, setChecked] = useState({})
//     const [user, setUser] = useState(null)
//     const checklistRef = useRef();

//     useEffect(() => {
//         const unsubcribe = onAuthStateChanged(auth, async (currentUser) => {
//             if (currentUser) {
//                 setUser(currentUser);
//                 const docRef = doc(db, `checklists/${currentUser.uid}`);
//                 const docSnap = await getDoc(docRef);
//                 if (docSnap.exists()) {
//                     setChecked(docSnap.data())
//                 }
//             } else {
//                 setUser(null);
//             }
//         });
//         return () => unsubcribe();
//     }, []);

//     const toggleCheck = (section, item) => {
//         const key = `${section}-${item}`;
//         const updated = { ...checked, [key]: !checked[key] };
//         setChecked(updated);
//         if (user) {
//             setDoc(doc(db, `checkList/${user.uid}`), updated);
//         }
//     }

//     const handleExport = () => {
//         const blob = new Blob([
//             JSON.stringify(checked, null, 2)
//         ], { type: 'application/json' });
//         const url = URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = `mawutech_checklist_${user?.uid || "guest"}.jsonltw1`;
//         link.click();
//     };

    

// const handleExportPDF = async () => {
//   try {
//     const element = checklistRef.current;
//     if (!element) {
//       console.error("Checklist ref is not available.");
//       return;
//     }

//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF("p", "mm", "a4");

//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save("mawutech_checklist.pdf");

//     console.log("PDF downloaded successfully.");
//   } catch (error) {
//     console.error("Error exporting PDF:", error);
//   }
// };



//     const handleSignIn = async () => {

//         const provider = new GoogleAuthProvider();
//         try {
//             await signInWithPopup(auth, provider);
//         } catch (err) {
//             console.error("Login failed", err);
//         }
//     };

//     const handleSignOut = async () => {
//         try {
//             await signOut(auth);
//         } catch (err) {
//             console.error("Logout failed", err);
//         }
//     };

// //     return (
// //         <div className='p-6 max-w-4x1 max-auto'>
// //             <h1 className="text-3x1 font-bold mb-6">Mawutech Client Project Checklist</h1>

// //             <div className="mb-6">
// //                 {user ? (
// //                     <div>
// //                         <p className="mb-2">Signed in as <strong>{user.displayName}</strong></p>
// //                         <button onClick={handleSignOut} className='px-4 py-2 bg-red-600 text-white rounded'>Sign Out</button>
// //                     </div>
// //                 ) : (
// //                     <button onClick={handleSignIn} className='px-4 py-2 bg-green-600 text-white rounded'>Sign In</button>
// //                 )}
// //             </div>
// //             {Object.entries(checklist).map(([section, items]) => (
// //                 <div key={section} className='mb-6'>
// //                     <h2 className="text-xl font-semibold mb-2">{section}</h2>
// //                     <ul className="space-y-1">
// //                         {items.map((item) => (
// //                             <li className="flex items-center">
// //                                 <input type="checkbox"
// //                                 checked={checked[`${section}-${item}`] || false}
// //                                 onChange={() => toggleCheck(section, item)}
// //                                 className='mr-2'
// //                                 />
// //                                 <span>{item}</span>
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             ))}
// //             <button
// //             onClick={handleExport}
// //             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
// //                 Export Progress
// //             </button>

// //             <button
// //   onClick={handleExportPDF}
// //   className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
// // >
// //   Export as PDF
// // </button>


// //             <p className="mt-10 italic text-gray-600">
// //                 "Whatever you do, work at it with all your heart, as working for the Lord, not for men." -Colossians 3:23
// //             </p>
// //         </div>
// //     )
// // }

// return (
//   <div className='p-6 max-w-4x1 max-auto'>
//     <h1 className="text-3x1 font-bold mb-6">Mawutech Client Project Checklist</h1>

//     <div className="mb-6">
//       {user ? (
//         <div>
//           <p className="mb-2">Signed in as <strong>{user.displayName}</strong></p>
//           <button onClick={handleSignOut} className='px-4 py-2 bg-red-600 text-white rounded'>Sign Out</button>
//         </div>
//       ) : (
//         <button onClick={handleSignIn} className='px-4 py-2 bg-green-600 text-white rounded'>Sign In</button>
//       )}
//     </div>

//     {/* ✅ Attach checklistRef here */}
//     <div ref={checklistRef}>
//       {Object.entries(checklist).map(([section, items]) => (
//         <div key={section} className='mb-6'>
//           <h2 className="text-xl font-semibold mb-2">{section}</h2>
//           <ul className="space-y-1">
//             {items.map((item) => (
//               <li key={item} className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={checked[`${section}-${item}`] || false}
//                   onChange={() => toggleCheck(section, item)}
//                   className='mr-2'
//                 />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}

//       <button
//         onClick={handleExport}
//         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Export Progress
//       </button>

//       <button
//         onClick={handleExportPDF}
//         className="mt-4 ml-4 px-4 py-2 bg-purple-600 text-white rounded">
//         Export as PDF
//       </button>
//     </div>

//     <p className="mt-10 italic text-gray-600">
//       "Whatever you do, work at it with all your heart, as working for the Lord, not for men." – Colossians 3:23
//     </p>
//   </div>
// );
// }
// export default ClientChecklistForm

import { useState, useEffect, useRef } from "react";
// import { db, auth } from "./firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import {
//   onAuthStateChanged,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const checklist = {
  "Project Discovery": [
    "Client filled project intake form / brief",
    "Initial meeting held (goals, audience, preferences)",
    "Competitor websites reviewed",
    "Client provided branding assets (logo, fonts, colors)",
    "Site objectives clearly defined"
  ],
  "Planning": [
    "Sitemap finalized (pages & structure)",
    "Wireframes created and approved",
    "Design mockup shared with client",
    "Client approved design direction",
    "Project timeline and milestones confirmed"
  ],
  "Agreement": [
    "Customer agreement signed",
    "Deposit received (GHS [amount])",
    "Communication channel set up (WhatsApp/Email/Trello)"
  ],
  "Development": [
    "Project initialized (Vite/React/Tailwind or relevant stack)",
    "Mobile-first layout implemented",
    "Pages developed (Home, About, Services, Contact, etc.)",
    "Forms functional (Contact, Newsletter, etc.)",
    "SEO basics in place",
    "Performance optimizations",
    "Responsive testing",
    "Accessibility checks"
  ],
  "Client Review": [
    "Staging link shared with client",
    "Round 1 feedback received and addressed",
    "Round 2 feedback received and addressed",
    "Final approval received"
  ],
  "Deployment": [
    "Final payment received",
    "Project deployed",
    "Domain connected",
    "SSL installed"
  ],
  "Handover": [
    "Admin credentials shared with client",
    "Maintenance plan offered",
    "Basic training/guide provided",
    "Portfolio/screenshots saved"
  ]
};

function ClientChecklistForm() {
  const [checked, setChecked] = useState({});
  const [user, setUser] = useState(null);
  const checklistRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const docRef = doc(db, `checklists/${currentUser.uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setChecked(docSnap.data());
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleCheck = (section, item) => {
    const key = `${section}-${item}`;
    const updated = { ...checked, [key]: !checked[key] };
    setChecked(updated);
    if (user) {
      setDoc(doc(db, `checklists/${user.uid}`), updated);
    }
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(checked, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mawutech_checklist_${user?.uid || "guest"}.json`;
    link.click();
  };

  const handleExportPDF = async () => {
  const pdf = new jsPDF("p", "mm", "a4");
  let y = 10;

  pdf.setFontSize(16);
  pdf.text("Mawutech Project Checklist (Completed Items)", 10, y);
  y += 10;

  pdf.setFontSize(12);

  Object.entries(checklist).forEach(([section, items]) => {
    const completed = items.filter(item => checked[`${section}-${item}`]);
    if (completed.length > 0) {
      pdf.setFont(undefined, "bold");
      pdf.text(section, 10, y);
      y += 7;
      pdf.setFont(undefined, "normal");
      completed.forEach(item => {
        pdf.text(`• ${item}`, 14, y);
        y += 6;
        if (y > 280) { // break page if needed
          pdf.addPage();
          y = 10;
        }
      });
      y += 4;
    }
  });

  if (y === 20) {
    pdf.text("No checklist items selected.", 10, y);
  }

  pdf.save("mawutech_completed_checklist.pdf");
};


  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mawutech Client Project Checklist</h1>

      <div className="mb-6">
        {user ? (
          <div>
            <p className="mb-2">
              Signed in as <strong>{user.displayName}</strong>
            </p>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Sign In
          </button>
        )}
      </div>

      <div ref={checklistRef} style={{ backgroundColor: "#fff", color: "#000", padding: "20px" }}>
        {Object.entries(checklist).map(([section, items]) => (
          <div key={section} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={checked[`${section}-${item}`] || false}
                    onChange={() => toggleCheck(section, item)}
                    className="mr-2"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Export JSON
        </button>

        <button
          onClick={handleExportPDF}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Export as PDF
        </button>
      </div>

      <p className="mt-10 italic text-gray-600">
        "Whatever you do, work at it with all your heart, as working for the Lord, not for men." – Colossians 3:23
      </p>
    </div>
  );
}

export default ClientChecklistForm;
