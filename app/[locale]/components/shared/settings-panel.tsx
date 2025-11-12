export default function settingsPanel() {
    return (
        <div className="b-settings-panel">
                <div className="settings-section">
                    <span>
                        Boxedd
                    </span>
                    <div className="b-switch">
                        <div className="switch-handle"></div>
                    </div>
                    <span>
                        Wide
                    </span>
                </div>
                <hr className="dashed" style={{ margin: "15px 0px" }} />
                <h5>Main Background</h5>
                <div className="settings-section bg-list">
                    <div className="bg-wood_pattern"></div>
                    <div className="bg-shattered"></div>
                    <div className="bg-vichy"></div>
                    <div className="bg-random-grey-variations"></div>
                    <div className="bg-irongrip"></div>
                    <div className="bg-gplaypattern"></div>
                    <div className="bg-diamond_upholstery"></div>
                    <div className="bg-denim"></div>
                    <div className="bg-crissXcross"></div>
                    <div className="bg-climpek"></div>
                </div>
                <hr className="dashed" style={{ margin: "15px 0px" }} />
                <h5>Color Scheme</h5>
                <div className="settings-section color-list">
                    <div data-src="css/themes/blue.css" style={{ background: "#45b5f5" }}></div>
                    <div data-src="css/themes/brown.css" style={{ background: "#dc8068" }}></div>
                    <div data-src="css/themes/cyan.css" style={{ background: "#00becc" }}></div>
                    <div data-src="css/themes/green.css" style={{ background: "#5bb75b" }}></div>
                    <div data-src="css/themes/orange.css" style={{ background: "#ff7149" }}></div>
                    <div data-src="css/themes/pink.css" style={{ background: "#fba1a1" }}></div>
                    <div data-src="css/themes/red.css" style={{ background: "#dc3522" }}></div>
                    <div data-src="css/themes/yellow.css" style={{ background: "#fdb813" }}></div>
                </div>

                <a data-src="css/style.css" className="reset"><span className="bg-wood_pattern">Reset</span></a>

                <div className="btn-settings"></div>
            </div>
    );
}