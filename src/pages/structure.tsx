import { items } from "../store";

export default function Structure() {
  return (
    <main className="structure-page">
      <h1>Моя структура</h1>

      <div className="items">
        {items.map((item, i) => (
          <div className="item" key={i}>
            <div className="table">
              <div className="top">
                <div className="level">
                  <span>{item.level}</span>
                </div>
                <div className="partners-count">
                  <span>{item.partnersCount}</span>
                </div>
              </div>
              <div className="text">
                <span>Уровень выплат</span>
                <span>Активных партнёров</span>
              </div>
            </div>
            <div className="partners">
              {item.partners.map((partner, i) => (
                <div className="partner" key={i}>
                  <img src={partner.image} alt={partner.name} />
                  <span>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
