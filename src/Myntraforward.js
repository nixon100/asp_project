import React from "react";
import "./css/Myntra.css";
import { useEffect, useState } from "react";
import commision from "./myntraforwardcomponents/commision.json";
import forwardfees from "./myntraforwardcomponents/forwardfees.json";
import reversefees from "./myntraforwardcomponents/reversefees.json";

const Myntraforward = () => {
  const [formData, setFormData] = useState({
    data0: "",
    data1: "",
    data2: "",
    data3: "",
    dataB: "",
    dataG: "",
    ASP: "",
    ASP0: "",
    dataC: "",
    zlc: true,
    xcv: true,
    pv: "",
    L: "",
    commisionF: 0,
    commissionV: 0,
    fixedfeesF: 0,
    paymentFeesF: 0,
    forwardgetF: 0,
    forwardfeesF: 0,
    reverseChargesF: 0,
    taxF: 0,
    I: 0,
  });
  const level = [];
  const mrp = [];
  const discount = [];

  const [pv, setPv] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < commision["Sheet1"].length; i++) {
      if (
        formData.dataB === commision["Sheet1"][i]["Brand"] &&
        formData.dataC === commision["Sheet1"][i]["Article_Type"] &&
        formData.dataG === commision["Sheet1"][i]["Gender"]
      ) {
        const shippingLevel = commision["Sheet1"][i]["Shipping Level"];
        console.log("shippingLevel", shippingLevel);
        level.push(shippingLevel);
        console.log("storage", level);
        console.log(i);
        const p1 = commisionfind(i);
        console.log("commisionfind", commisionfind(i));
        const p3 = commissionValue(p1);
        console.log("commissionValue", commissionValue(p1));
        const p4 = fixedFeesfind();
        console.log("fixedFeesfind", fixedFeesfind());
        const p5 = paymentFeesfind();
        console.log("paymentFeesfind", paymentFeesfind());
        const p2 = forwardGet();
        console.log("forwardGet", forwardGet());
        const p6 = fff(p2);
        console.log("forwardfees", fff(p2));
        const p7 = reversechargesGett();
        console.log("reversechargesGett", reversechargesGett());
        const p8 = taxget(p3, p4, p5, p6, p7);
        console.log("taxget", p8);
        const p9 = paymentReceipt(p3, p4, p5, p6, p7, p8);
        console.log("paymentReceipt", p9);
        setPv(p9);
      } else {
        console.log("not match");
      }
    }
  };

  const commisionfind = (i) => {
    return commision["Sheet1"][i]["Commision+MFB+Royalty"];
    // console.log("commision",commissionPercentage)
    // setFormData({...formData, commisionF:commissionPercentage})
  };
  const commissionValue = (c) => {
    return (formData.ASP * c) / 100;
    // console.log("commissionValue",commissionValue)
    // setFormData({...formData, commissionV:commissionValue})
  };
  const fixedFeesfind = () => {
    return formData.ASP > 1500
      ? 43
      : formData.ASP > 1000
      ? 42
      : formData.ASP > 750
      ? 19
      : formData.ASP > 500
      ? 15
      : 7;
    //   console.log("fixedFees",fixedFees)
    //  setFormData({...formData,fixedfeesF:fixedFees})
  };
  const paymentFeesfind = () => {
    return (formData.ASP * 0.02) / (1 - formData.data2 / 100);
    // console.log("paymentFees",paymentFees)
    // setFormData({...formData, paymentFeesF:paymentFees})
  };
  const forwardGet = () => {
    return forwardd();
  };
  const fff = (s) => {
    return s / (1 - formData.data2 / 100);
  };
  const reversechargesGett = () => {
    const reversechargesget = vbnhtre();
    console.log("reversechargesget", reversechargesget);
    return (
      (reversechargesget * (formData.data2 / 100)) / (1 - formData.data2 / 100)
    );
  };

  const taxget = (p3, p4, p5, p6, p7) => {
    return (p3 + p4 + p5 + p6 + p7) * 0.18;
  };
  const paymentReceipt = (p3, p4, p5, p6, p7, p8) => {
    return formData.ASP - (p3 + p4 + p5 + p6 + p7 + p8);
  };

  function forwardd() {
    if (level[0] === 1) {
      // return forwardfees["Sheet1"][0]["__EMPTY_2"]
      return forwardfees["Sheet1"][0]["__EMPTY_2"];
    }
    if (level[0] === 2) {
      return forwardfees["Sheet1"][1]["__EMPTY_2"];
    }
    if (level[0] === 3) {
      return forwardfees["Sheet1"][2]["__EMPTY_2"];
    }
    if (level[0] === 4) {
      return forwardfees["Sheet1"][3]["__EMPTY_2"];
    }
  }
  const handleClick = (e) => {
    setIsDisabled(true);
    mrp.push(e.target.value);
  };
  function adding(e) {
    discount.push(e.target.value);
  }
  function aspAdd() {
    if (isDisabled) {
      console.log(formData.data0);
      console.log(formData.data1);
      return (formData.data0 * (100 - formData.data1)) / 100;
      // console.log(formData.data0 * (100 - formData.data1) / 100)
    }
  }
  function vbnhtre() {
    if (level[0] === 1) {
      // return forwardfees["Sheet1"][0]["__EMPTY_2"]
      return reversefees["Sheet1"][0]["__EMPTY_2"];
    }
    if (level[0] === 2) {
      return reversefees["Sheet1"][1]["__EMPTY_2"];
    }
    if (level[0] === 3) {
      return reversefees["Sheet1"][2]["__EMPTY_2"];
    }
    if (level[0] === 4) {
      return reversefees["Sheet1"][3]["__EMPTY_2"];
    }
  }
  function abc() {
    console.log("yesss");
    const abcd = (formData.data0 * formData.data1) / 100;
    return formData.data0 - abcd;
  }

  return (
    <form action="" method="get" className="form-example">
      <div className="gamut-14z39fp-LayoutGrid 14g39">
        {formData.xcv && (
          <div className="form-example1">
            <label for="data0">Enter MRP: </label>
            <input
              type="text"
              name="data0"
              id="0011"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  data0: parseInt(e.target.value),
                  zlc: false,
                });
                handleClick(e);
              }}
            />

            <label for="data1">Enter Discount: </label>
            <input
              type="text"
              name="data1"
              id="0011"
              onChange={(e) => {
                setFormData({ ...formData, data1: parseInt(e.target.value) });
              }}
            />

            <button
              className="form-example23"
              onClick={(e) => {
                setFormData({ ...formData, ASP: aspAdd(), xcv: false });
              }}
              role="button"
            >
              Calc
            </button>
          </div>
        )}
        <div className="form-example">
          <p>Selling Price: {formData.ASP}</p>
          <label for="data3">Enter ASP: </label>
          <input
            type="text"
            name="data3"
            id="0011"
            value={formData.ASP}
            onChange={(e) => {
              setFormData({
                ...formData,
                ASP: parseInt(e.target.value),
                xcv: false,
              });
            }}
            disabled={isDisabled}
          />
        </div>

        <div className="form-example">
          <label for="data2">Enter Customer Returns: </label>
          <input
            type="text"
            name="data2"
            id="0011"
            onChange={(e) =>
              setFormData({ ...formData, data2: parseInt(e.target.value) })
            }
            required
          />
        </div>

        <div className="form-example">
          <label for="dataB">Brand:</label>
          <select
            name="dataB"
            id="dataB"
            value={formData.dataB}
            onChange={(e) =>
              setFormData({ ...formData, dataB: e.target.value })
            }
          >
            <option value="">--Please choose an option--</option>
            <option value="DressBerry">DressBerry</option>
            <option value="House of Pataudi">House of Pataudi</option>
            <option value="Ode by House of Pataudi">
              Ode by House of Pataudi
            </option>
            <option value="Sangria">Sangria</option>
          </select>
        </div>

        <div className="form-example">
          <label for="dataG">Gender:</label>
          <select
            name="dataG"
            id="dataB"
            value={formData.dataG}
            onChange={(e) =>
              setFormData({ ...formData, dataG: e.target.value })
            }
          >
            <option value="">--Please choose an option--</option>

            {formData.dataB === "DressBerry" ? (
              <option value="Women">Women</option>
            ) : null}
            {formData.dataB === "House of Pataudi" ? (
              <>
                {" "}
                <option value="Women">Women</option>
                <option value="Men">Men</option>{" "}
              </>
            ) : null}
            {formData.dataB === "Ode by House of Pataudi" ? (
              <>
                {" "}
                <option value="Men">Men</option>{" "}
              </>
            ) : null}
            {formData.dataB === "Sangria" ? (
              <>
                {" "}
                <option value="Women">Women</option>{" "}
              </>
            ) : null}
          </select>
        </div>

        <div className="form-example">
          <label for="dataG">Category:</label>
          <select
            name="dataG"
            id="dataB"
            value={formData.dataC}
            onChange={(e) =>
              setFormData({ ...formData, dataC: e.target.value })
            }
          >
            <option value="">--Please choose an option--</option>
            {formData.dataB === "DressBerry" ? (
              <>
                <option value="Tops">Tops</option>
                <option value="Shirts">Shirts</option>
                <option value="Dresses">Dresses</option>
              </>
            ) : null}
            {formData.dataB === "House of Pataudi" ? (
              <>
                <option value="Kurta Sets">Kurta Sets</option>
                <option value="Kurtas">Kurtas</option>
              </>
            ) : null}
            {formData.dataB === "Ode by House of Pataudi" ? (
              <>
                <option value="Kurta Sets">Kurta Sets</option>
                <option value="Kurtas">Kurtas</option>
              </>
            ) : null}
            {formData.dataB === "Sangria" ? (
              <>
                <option value="Kurta Sets">Kurta Sets</option>
                <option value="Kurtas">Kurtas</option>
                <option value="Lehenga Choli">Lehenga Choli</option>
                <option value="Skirts">Skirts</option>
                <option value="Palazzos">Palazzos</option>
                <option value="Tops">Tops</option>
                <option value="Trousers">Trousers</option>
                <option value="Co-Ords">Co-Ords</option>
                <option value="Dresses">Dresses</option>
                <option value="Leggings">Leggings</option>
              </>
            ) : null}
          </select>
        </div>

        <button
          className="form-example23"
          onClick={(e) => {
            handleFormSubmit(e);
          }}
          role="button"
        >
          Calc
        </button>

        <div className="form-example">
          <label for="dataPV">Payment Receipt: </label>
          <input
            type="number"
            name="dataPV"
            id="0011"
            value={pv}
            onChange={(e) =>
              setFormData({ ...formData, dataPV: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div id="transformers">
        <button id="ksi" onClick={() => window.location.reload()}>
          <span id="text">Reload</span>
        </button>
      </div>
    </form>
  );
};

export default Myntraforward;
