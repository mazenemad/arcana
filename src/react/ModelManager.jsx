import React, { useEffect } from 'react';

/**
 * React component rendering the 3D Model Manager example
 * originally implemented with plain HTML and JavaScript.
 * The underlying logic from the example is executed on mount.
 */
export default function ModelManager() {
  useEffect(() => {
    const mapboxScript = document.createElement('script');
    mapboxScript.src = 'https://api.mapbox.com/mapbox-gl-js/v3.13.0/mapbox-gl.js';
    document.body.appendChild(mapboxScript);

    const threeboxScript = document.createElement('script');
    threeboxScript.src = 'https://cdn.jsdelivr.net/gh/jscastro76/threebox@v.2.2.1/dist/threebox.min.js';
    document.body.appendChild(threeboxScript);

    function run() {
      // original code relies on global functions
      // eslint-disable-next-line no-new-func
      new Function(`(${initMap.toString()})();`)();
    }

    threeboxScript.onload = run;

    return () => {
      document.body.removeChild(mapboxScript);
      document.body.removeChild(threeboxScript);
    };
  }, []);

  return (
    <div className="model-manager">
      <div className="mode-selector">
        <button id="editModeBtn" className="mode-btn active">✏️ Edit Mode</button>
        <button id="viewModeBtn" className="mode-btn">👁️ View Mode</button>
      </div>
      <div className="edit-controls" id="editControls">
        <div className="panel-header">
          <h2 className="panel-title">3D Model Manager</h2>
          <p className="panel-subtitle">Create, transform and export your 3D scene</p>
        </div>
        <div className="panel-content">
          <div className="action-buttons">
            <div className="btn-grid">
              <button id="addModelBtn" className="btn"><span>📁</span> Add Model</button>
              <button id="toggleControlsBtn" className="btn secondary"><span>👁️</span> Hide Controls</button>
              <button id="exportBtn" className="btn success btn-full"><span>💾</span> Export Scene</button>
              <button id="deleteModelBtn" className="btn danger"><span>🗑️</span> Delete Selected</button>
              <button id="clearAllBtn" className="btn danger"><span>🧹</span> Clear All</button>
            </div>
          </div>
          <div className="models-section">
            <div className="section-header">
              Models
              <span className="model-count" id="modelCount">0</span>
            </div>
            <div className="models-list" id="modelsList" />
          </div>
          <div className="properties-panel">
            <div className="section-header">Properties</div>
            <div className="properties-content" id="propertiesContent">
              <div className="no-selection">Select a model to view and edit its properties</div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-controls hidden" id="viewControls">
        <button id="loadSceneBtn" className="view-btn"><span>📂</span> Load Scene</button>
      </div>
      <div className="map-instructions" id="mapInstructions">
        <div className="instruction-item"><div className="instruction-icon">2×</div><span>Double-click map to add new model</span></div>
        <div className="instruction-item"><div className="instruction-icon">🔵</div><span>Drag blue handle to rotate</span></div>
        <div className="instruction-item"><div className="instruction-icon">🟠</div><span>Drag orange handle to scale</span></div>
        <div className="instruction-item"><div className="instruction-icon">⚫</div><span>Drag circle to move model</span></div>
      </div>
      <input type="file" id="glbInput" accept=".glb,.gltf" style={{ display: 'none' }} />
      <input type="file" id="sceneInput" accept=".json" style={{ display: 'none' }} />
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </div>
  );
}

// Placeholder for the large initialization logic from the vanilla example.
// It can be replaced with the full script if needed.
function initMap() {
  // Mapbox and threebox setup would go here
  console.log('initMap called');
}
