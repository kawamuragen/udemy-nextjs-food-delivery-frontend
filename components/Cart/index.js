import Link from "next/link";
import { useContext } from "react";
import { Badge, Button, Card, CardBody, CardTitle } from "reactstrap";
import AppContext from "../../context/AppContext";

const Cart = () => {
  // cart をコンテキストから取得
  const appContext = useContext(AppContext);
  const { cart } = appContext;

  return (
    <div>
      <Card style={{ padding: "10px 5px" }}>
        <CardTitle
          style={{
            margin: 10,
            textAlign: "center",
            fontWeight: 600,
            fontSize: 25,
          }}
        >
          注文一覧
        </CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginButtom: 6 }}>
            <small>料理：</small>
          </div>
          <div>
            {cart.items
              ? cart.items.map((item) => {
                  if (item.quantity > 0) {
                    return (
                      <div
                        className="items-one"
                        style={{ marginButtom: 15 }}
                        key={item.id}
                      >
                        <div>
                          <span id="item-price">&nbsp; {item.price}</span>
                          <span id="item-name">&nbsp; {item.name}</span>
                        </div>
                        <div>
                          <Button
                            style={{
                              height: 25,
                              padding: 0,
                              width: 15,
                              marginRight: 5,
                              marginLeft: 10,
                            }}
                            onClick={() => appContext.addItem(item)}
                            color="link"
                          >
                            +
                          </Button>
                          <Button
                            style={{
                              height: 25,
                              padding: 0,
                              width: 15,
                              marginRight: 5,
                              marginLeft: 10,
                            }}
                            onClick={() => appContext.removeItem(item)}
                            color="link"
                          >
                            -
                          </Button>
                          <span id="item-quantity" style={{ marginLeft: 5 }}>
                            {item.quantity}つ
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : null}
            <div>
              <Badge style={{ width: 200, padding: 10 }} color="light">
                <h5 style={{ fontWeight: 100, color: "gray" }}>合計：</h5>
                <h3>{cart.total}円</h3>
              </Badge>
              <div>
                <Link href="/checkout">
                  <Button style={{ width: "100%" }} color="primary">
                    <a>注文する</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
};

export default Cart;
