
(function () {
  "use strict";

  const ADJUSTMENTS = [{"id": "extensions", "title": "Extensions", "category": "Time, attendance and flexibility", "context": "Students may need additional time because health conditions or other access barriers affect when they can complete assessment.", "baseline": "Make extension processes clear, accessible and low-friction. Avoid requiring unnecessary personal detail.", "deeper": "Review deadline clustering, task staging, notice periods and whether a short self-managed extension can be built into the course.", "rows": ["course-design-E", "assessment-E"], "guides": ["inclusive-assessment", "recurring-adjustments"]}, {"id": "advance-materials", "title": "Advance access to learning materials", "category": "Materials and communication", "context": "Advance access can support preparation, assistive technology, fatigue management, language processing and students balancing health or caring needs.", "baseline": "Publish essential slides, readings, prompts and activity instructions as early as practicable.", "deeper": "Create a reliable publication schedule and accessible source-material workflow across the whole course.", "rows": ["course-design-A", "course-design-L", "teaching-E", "teaching-A", "teaching-L"], "guides": ["accessible-materials", "flexible-participation"]}, {"id": "transcripts", "title": "Transcripts of audio, video and animated material", "category": "Materials and communication", "context": "Transcripts support students who cannot reliably access audio, who use assistive technologies, or who need searchable and reviewable text.", "baseline": "Provide accurate captions and a usable transcript for essential recorded media.", "deeper": "Build captions, transcripts and visual-description requirements into media commissioning and production workflows.", "rows": ["course-design-A", "teaching-A"], "guides": ["accessible-materials"]}, {"id": "accessible-formats", "title": "Accessible formats for materials", "category": "Materials and communication", "context": "Students may need structured, selectable and reflowable text rather than scanned PDFs, image-only files or inaccessible third-party content.", "baseline": "Provide accessible source files and an alternative when a required format cannot be made accessible.", "deeper": "Use accessible templates, quality assurance and ownership so remediation is not repeated one student at a time.", "rows": ["course-design-A", "teaching-A"], "guides": ["accessible-materials", "recurring-adjustments"]}, {"id": "group-work", "title": "Adjustments to group work", "category": "Participation and assessment", "context": "Students may need alternative assessment, supported group allocation, structured processes, explicitly negotiated roles or alternative communication modes.", "baseline": "Clarify roles, communication methods, contribution expectations and a private route for raising access or safety concerns.", "deeper": "Review whether collaboration is essential, teach collaboration explicitly, offer structured or alternative pathways and coordinate group-work burden across the program.", "rows": ["teaching-E", "teaching-A", "teaching-L", "assessment-E", "assessment-A"], "guides": ["flexible-participation", "inclusive-assessment"]}, {"id": "oral-presentations", "title": "Adjustments to oral presentations", "category": "Participation and assessment", "context": "Students may require additional time, modified conditions or an equivalent assessment format when oral delivery creates a barrier unrelated to the learning outcome.", "baseline": "Clarify which oral capabilities are genuinely assessed and provide accessible instructions, practice and reasonable conditions.", "deeper": "Offer equivalent demonstration modes when oral presentation is not essential, using shared outcome-aligned criteria.", "rows": ["teaching-A", "teaching-L", "assessment-E", "assessment-A", "assessment-L"], "guides": ["inclusive-assessment", "flexible-participation"]}, {"id": "breaks", "title": "Breaks during longer activities", "category": "Time, attendance and flexibility", "context": "Students may need to pause, move, regulate symptoms, use medication or manage fatigue during longer classes, laboratories, placements or assessments.", "baseline": "Schedule predictable breaks and explain how students can step out and return without public disclosure.", "deeper": "Review activity length, pacing and continuous-attendance assumptions across teaching, assessment and placements.", "rows": ["teaching-E", "teaching-A", "assessment-E"], "guides": ["flexible-participation", "inclusive-assessment"]}, {"id": "extra-inclass-time", "title": "Additional time for in-class activities", "category": "Time, attendance and flexibility", "context": "Health, fatigue, pain, processing or communication differences may make tightly timed classroom activities an access barrier.", "baseline": "Provide processing time, written prompts and a route to complete or revisit activities where speed is not the learning outcome.", "deeper": "Redesign pacing and participation so rapid performance is not treated as the default evidence of engagement.", "rows": ["teaching-E", "teaching-A", "teaching-L"], "guides": ["flexible-participation"]}, {"id": "extra-assessment-time", "title": "Additional time for in-class assessments or presentations", "category": "Time, attendance and flexibility", "context": "Students may need additional time because health, processing, speech, mobility or assistive-technology use affects task completion.", "baseline": "Implement the approved adjustment reliably and ensure the additional time works with room, technology and scheduling arrangements.", "deeper": "Review whether the assessment is unnecessarily speeded and whether the format measures the intended outcome.", "rows": ["teaching-A", "assessment-E", "assessment-A", "assessment-L"], "guides": ["inclusive-assessment"]}, {"id": "absenteeism", "title": "Support for health-related absenteeism and missed marks", "category": "Time, attendance and flexibility", "context": "Students may miss classes or low-stakes activities because of episodic or fluctuating health conditions.", "baseline": "Provide a clear route to essential materials and, where possible, an equivalent way to make up participation or marks.", "deeper": "Review whether attendance is being used as a proxy for learning and design equivalent access into the course baseline.", "rows": ["course-design-E", "teaching-E", "teaching-A", "assessment-E"], "guides": ["flexible-participation", "recurring-adjustments"]}, {"id": "temporary-online", "title": "Temporary online participation or alternate tutorial attendance", "category": "Time, attendance and flexibility", "context": "Students may temporarily need online access or another class time because of health, treatment, mobility, transport or caring needs.", "baseline": "Explain the process for temporary mode or tutorial changes and provide equivalent access where it is practicable.", "deeper": "Design course delivery so essential learning can survive temporary changes in location, mode or schedule.", "rows": ["course-design-E", "teaching-E", "teaching-A"], "guides": ["flexible-participation", "recurring-adjustments"]}, {"id": "food-drink-medicine", "title": "Food, drink or medicine in class", "category": "Health and physical environment", "context": "Students may need immediate access to food, drink or medication to manage health safely.", "baseline": "Communicate that medically required food, drink and medicine can be used without unnecessary attention, subject only to genuine safety restrictions.", "deeper": "Review blanket classroom and laboratory rules and create clear, dignified alternatives where safety restrictions genuinely apply.", "rows": ["teaching-E", "teaching-A"], "guides": ["flexible-participation"]}, {"id": "processing-notice", "title": "Additional processing time or advance notice before being called on", "category": "Materials and communication", "context": "Students may need more time to process language, organise a response, use communication technology or manage anxiety and health symptoms.", "baseline": "Provide questions in advance, use think time and avoid cold-calling students without an agreed process.", "deeper": "Use varied participation modes and design pacing so immediate verbal response is not the default measure of understanding.", "rows": ["teaching-E", "teaching-A", "teaching-L", "assessment-L"], "guides": ["flexible-participation"]}, {"id": "assistive-tech", "title": "Screen readers and speech-to-text use", "category": "Technology and human support", "context": "Students may rely on screen readers, speech recognition or speech-to-text for reading, navigation, writing and participation.", "baseline": "Ensure documents, platforms, forms and assessment systems are keyboard-operable and compatible with assistive technology.", "deeper": "Test key course tasks with assistive technologies and provide accessible fallbacks for incompatible third-party tools.", "rows": ["course-design-A", "teaching-A", "assessment-A"], "guides": ["accessible-materials", "inclusive-assessment"]}, {"id": "ergonomic-furniture", "title": "Ergonomic desks, chairs, lab tables or stools", "category": "Health and physical environment", "context": "Students may require adjustable or supportive furniture to manage pain, fatigue, mobility or physical access.", "baseline": "Confirm the required furniture is available, correctly located and does not segregate the student unnecessarily.", "deeper": "Audit common teaching, laboratory and placement spaces for flexible furniture and escalation pathways.", "rows": ["course-design-E", "teaching-E", "teaching-A"], "guides": ["recurring-adjustments"]}, {"id": "human-support", "title": "Peer note takers, readers and scribes", "category": "Technology and human support", "context": "Some students may require human support to access spoken, written or assessment content.", "baseline": "Implement the support arrangement reliably and protect privacy, role clarity and access to necessary materials.", "deeper": "Improve advance materials, accessible recordings and course documentation while retaining human support where it remains necessary.", "rows": ["course-design-A", "teaching-A", "teaching-L", "assessment-A"], "guides": ["accessible-materials", "recurring-adjustments"]}, {"id": "clear-language", "title": "Clear, direct, non-figurative language and step-by-step tasks", "category": "Materials and communication", "context": "Students may need explicit language and clear sequencing because figurative, ambiguous or densely layered instructions create avoidable processing barriers.", "baseline": "Use direct language, explicit verbs, clear steps and examples of the expected outcome.", "deeper": "Audit disciplinary language and hidden conventions across materials, teaching and assessment rather than simplifying only one task.", "rows": ["course-design-L", "teaching-L", "assessment-L"], "guides": ["accessible-materials", "inclusive-assessment"]}, {"id": "written-verbal", "title": "Written as well as verbal instructions", "category": "Materials and communication", "context": "Students may not be able to reliably retain or process instructions delivered through speech alone.", "baseline": "Provide key instructions, deadlines, changes and activity steps in writing as well as verbally.", "deeper": "Create consistent written communication and activity templates across the course and placements.", "rows": ["course-design-A", "course-design-L", "teaching-A", "teaching-L", "assessment-L"], "guides": ["accessible-materials", "flexible-participation"]}, {"id": "sensory-environment", "title": "Predictable lighting and sensory environments", "category": "Health and physical environment", "context": "Lighting, sound, crowding, temperature, odours and unexpected sensory changes can prevent participation or worsen health symptoms.", "baseline": "Communicate known conditions and changes, reduce unnecessary sensory load and identify quieter or lower-stimulation options where possible.", "deeper": "Include sensory access in room selection, teaching plans, events, laboratories and placement preparation.", "rows": ["course-design-E", "teaching-E", "teaching-A"], "guides": ["flexible-participation", "recurring-adjustments"]}, {"id": "placement-location", "title": "Priority placement allocation closer to home", "category": "Placements and field learning", "context": "Travel distance can create major access barriers through health, fatigue, transport, caring and financial pressures.", "baseline": "Include approved access needs in placement allocation and communicate the process and constraints early.", "deeper": "Review placement-allocation criteria, travel expectations, transport costs and the availability of equitable alternatives.", "rows": ["course-design-E", "teaching-E", "assessment-E"], "guides": ["recurring-adjustments"]}, {"id": "placement-timing", "title": "Flexible placement timing", "category": "Placements and field learning", "context": "Fixed placement hours or blocks may conflict with health treatment, fatigue, caring responsibilities or accessible transport.", "baseline": "Negotiate approved timing changes with the placement site and clearly document essential attendance requirements.", "deeper": "Design placement models with more than one viable schedule or pathway where accreditation and safety requirements allow.", "rows": ["course-design-E", "teaching-E", "assessment-E"], "guides": ["recurring-adjustments", "inclusive-assessment"]}];

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* Display preferences */
  const root = document.documentElement;
  const prefButtons = Array.from(document.querySelectorAll("[data-setting][data-value]"));
  const prefStatus = document.getElementById("pref-status");
  const resetButton = document.getElementById("reset-prefs");
  const prefKey = "uq-inclusive-hub-prefs-v2";
  const defaults = { size: "standard", spacing: "standard", theme: "light" };

  function applyPref(setting, value, announce) {
    root.dataset[setting] = value;
    prefButtons
      .filter((button) => button.dataset.setting === setting)
      .forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.value === value));
      });
    if (announce && prefStatus) prefStatus.textContent = `${setting} set to ${value}.`;
  }

  function savePrefs() {
    try {
      localStorage.setItem(prefKey, JSON.stringify({
        size: root.dataset.size || defaults.size,
        spacing: root.dataset.spacing || defaults.spacing,
        theme: root.dataset.theme || defaults.theme
      }));
    } catch (error) {}
  }

  function restorePrefs() {
    let data = defaults;
    try {
      data = JSON.parse(localStorage.getItem(prefKey) || "null") || defaults;
    } catch (error) {}
    Object.keys(defaults).forEach((setting) => {
      applyPref(setting, data[setting] || defaults[setting], false);
    });
  }

  restorePrefs();

  prefButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyPref(button.dataset.setting, button.dataset.value, true);
      savePrefs();
    });
  });

  resetButton?.addEventListener("click", () => {
    Object.keys(defaults).forEach((setting) => applyPref(setting, defaults[setting], false));
    savePrefs();
    if (prefStatus) prefStatus.textContent = "Display preferences reset.";
  });

  /* Quick framework finder */
  const finder = document.querySelector("[data-uq-finder]");
  if (finder) {
    const topic = finder.querySelector("[data-finder-topic]");
    const depth = finder.querySelector("[data-finder-depth]");
    const button = finder.querySelector("[data-finder-button]");
    const result = finder.querySelector("[data-finder-result]");

    const routes = {
      "representation-design": ["Course and program design review", "tools/course-program-design.html", "Audit whose knowledge, identities and pathways are centred in the curriculum."],
      "equity-design": ["Course and program design review", "tools/course-program-design.html", "Check whether flexibility, costs and structure assume an unencumbered student."],
      "access-design": ["Course and program design review", "tools/course-program-design.html", "Review the accessibility of materials, pathways and student choice."],
      "language-design": ["Course and program design review", "tools/course-program-design.html", "Surface academic language demands and scaffold literacies explicitly."],
      "representation-teaching": ["Teaching review", "tools/teaching-review.html", "Check whether teaching interactions respect diverse identities and knowledge in practice."],
      "equity-teaching": ["Teaching review", "tools/teaching-review.html", "Build flexibility into attendance, support access and teaching participation."],
      "access-teaching": ["Teaching review", "tools/teaching-review.html", "Use accessible delivery, recordings, captions and varied participation modes."],
      "language-teaching": ["Teaching review", "tools/teaching-review.html", "Make hidden norms, terminology and communication expectations explicit."],
      "representation-assessment": ["Assessment review", "tools/assessment-review.html", "Review tasks for cultural assumptions and whose knowledge counts as valid evidence."],
      "equity-assessment": ["Assessment review", "tools/assessment-review.html", "Reduce rigid conditions and build fairness for students managing different pressures."],
      "access-assessment": ["Assessment review", "tools/assessment-review.html", "Check format barriers, multiple submission modes and student agency in how they demonstrate learning."],
      "language-assessment": ["Assessment review", "tools/assessment-review.html", "Scaffold the language and literacies needed to succeed in the task."],
      "whole-course": ["Whole-course UQ framework review", "tools/whole-course-uq-framework.html", "Look for patterns across sections and dimensions rather than treating each row in isolation."]
    };

    button?.addEventListener("click", () => {
      const route = routes[topic.value];
      if (!route) {
        result.innerHTML = "<h3>Choose a review area first</h3><p>Select the closest section and dimension, or choose the whole-course review.</p>";
      } else {
        const [toolName, href, starter] = route;
        let action = starter;
        if (depth.value === "develop") {
          action += " Then review how it interacts with the other dimensions and gather student feedback.";
        } else if (depth.value === "holistic") {
          action += " Then map the barrier across course design, teaching and assessment, assign ownership and schedule recurring review.";
        }
        result.innerHTML =
          `<h3>Suggested next step</h3><p>${escapeHtml(action)}</p>` +
          `<p><a class="button" href="${escapeHtml(href)}">Open ${escapeHtml(toolName)}</a></p>`;
      }
      result.hidden = false;
      result.focus();
    });
  }

  /* Common adjustment focus panels */
  document.querySelectorAll("[data-adjustment-focus]").forEach((panel) => {
    const select = panel.querySelector("[data-adjustment-select]");
    const button = panel.querySelector("[data-adjustment-show]");
    const result = panel.querySelector("[data-adjustment-result]");
    const reviewApp = document.querySelector("[data-framework-review]");

    function clearHighlights() {
      document.querySelectorAll(".dimension-review.adjustment-highlight").forEach((row) => {
        row.classList.remove("adjustment-highlight");
      });
    }

    function renderAdjustment(adjustment) {
      clearHighlights();
      if (!adjustment) {
        result.innerHTML = "<h3>Choose an adjustment</h3><p>Select the closest common adjustment to see design responses and related review areas.</p>";
        result.hidden = false;
        return;
      }

      const availableRows = [];
      const missingRows = [];
      adjustment.rows.forEach((rowId) => {
        const row = document.getElementById(rowId);
        if (row) {
          row.classList.add("adjustment-highlight");
          availableRows.push(rowId);
        } else {
          missingRows.push(rowId);
        }
      });

      const rowLinks = availableRows.map((rowId) => {
        const row = document.getElementById(rowId);
        const title = row?.querySelector("[data-dimension-title]")?.textContent.trim() || rowId;
        const section = row?.closest(".section-review")?.dataset.sectionTitle || "";
        return `<li><a href="#${escapeHtml(rowId)}">${escapeHtml(section)} — ${escapeHtml(title)}</a></li>`;
      }).join("");

      const guideLinks = adjustment.guides.map((slug) => {
        const names = {
          "accessible-materials": "Accessible materials quick guide",
          "inclusive-assessment": "Inclusive assessment quick guide",
          "flexible-participation": "Flexible participation quick guide",
          "recurring-adjustments": "Recurring adjustments quick guide",
          "belonging": "Belonging quick guide",
          "student-voice": "Student voice quick guide"
        };
        const base = window.location.pathname.includes("/tools/") ? "../guides/" : "guides/";
        return `<li><a href="${base}${escapeHtml(slug)}.html">${escapeHtml(names[slug] || slug)}</a></li>`;
      }).join("");

      result.innerHTML =
        `<h3>${escapeHtml(adjustment.title)}</h3>` +
        `<p>${escapeHtml(adjustment.context)}</p>` +
        `<h4>Implement the individual adjustment</h4><p>${escapeHtml(adjustment.baseline)}</p>` +
        `<h4>Use it as a design prompt</h4><p>${escapeHtml(adjustment.deeper)}</p>` +
        (rowLinks ? `<h4>Related review areas on this page</h4><ul>${rowLinks}</ul>` : "") +
        (missingRows.length ? `<p><strong>This adjustment also affects other sections.</strong> Use the whole-course review to see the full pattern.</p>` : "") +
        `<h4>Related quick guides</h4><ul>${guideLinks}</ul>`;

      result.hidden = false;
      result.focus();

      if (reviewApp) {
        reviewApp.dataset.adjustmentId = adjustment.id;
        reviewApp.dataset.adjustmentTitle = adjustment.title;
        try {
          localStorage.setItem(`uq-framework-adjustment:${reviewApp.dataset.frameworkReview}`, adjustment.id);
        } catch (error) {}
      }
    }

    button?.addEventListener("click", () => {
      renderAdjustment(ADJUSTMENTS.find((item) => item.id === select.value));
    });

    if (reviewApp) {
      try {
        const saved = localStorage.getItem(`uq-framework-adjustment:${reviewApp.dataset.frameworkReview}`);
        if (saved && select.querySelector(`option[value="${CSS.escape(saved)}"]`)) {
          select.value = saved;
          renderAdjustment(ADJUSTMENTS.find((item) => item.id === saved));
        }
      } catch (error) {}
    }
  });

  /* Framework review and accessible report export */
  document.querySelectorAll("[data-framework-review]").forEach((app) => {
    const toolId = app.dataset.frameworkReview;
    const toolTitle = app.dataset.toolTitle || "UQ inclusive course review";
    const storageKey = `uq-framework-review:${toolId}`;
    const levelSelects = Array.from(app.querySelectorAll(".level-select"));
    const notes = Array.from(app.querySelectorAll(".note-textarea"));
    const courseContext = app.querySelector("[data-course-context]");
    const summaryText = app.querySelector("[data-summary-text]");
    const progress = app.querySelector("[data-summary-progress]");
    const statTargets = {
      level1: app.querySelector("[data-count='level1']"),
      level2: app.querySelector("[data-count='level2']"),
      level3: app.querySelector("[data-count='level3']"),
      level4: app.querySelector("[data-count='level4']")
    };
    const sectionFilter = app.querySelector("[data-section-filter]");
    const planOutput = app.querySelector("[data-generated-plan]");
    const generateButton = app.querySelector("[data-generate-plan]");
    const downloadButton = app.querySelector("[data-download-report]");
    const printButton = app.querySelector("[data-print-review]");
    const clearButton = app.querySelector("[data-clear-review]");
    let latestReportHtml = "";

    function rowRecord(select) {
      const row = select.closest(".dimension-review");
      const section = select.closest(".section-review");
      const selectedLevel = select.value;
      const nextStep = row?.querySelector(`.next-step[data-from="${selectedLevel}"]`);
      const example = row?.querySelector(".external-example");
      return {
        id: row?.dataset.rowId || select.id,
        sectionId: section?.dataset.sectionId || "",
        sectionTitle: section?.dataset.sectionTitle || "Section",
        dimensionCode: row?.dataset.dimensionCode || "",
        dimensionTitle: row?.querySelector("[data-dimension-title]")?.textContent.trim() || "Dimension",
        value: selectedLevel,
        recommendedAction: nextStep?.querySelector(".next-step-summary")?.textContent.trim() || "",
        exampleTitle: example?.dataset.exampleTitle || "",
        exampleSource: example?.dataset.exampleSource || "",
        exampleUrl: example?.dataset.exampleUrl || ""
      };
    }

    function selectedAdjustment() {
      const id = app.dataset.adjustmentId || "";
      return ADJUSTMENTS.find((item) => item.id === id) || null;
    }

    function saveState() {
      try {
        localStorage.setItem(storageKey, JSON.stringify({
          levels: Object.fromEntries(levelSelects.map((select) => [rowRecord(select).id, select.value])),
          notes: Object.fromEntries(notes.map((textarea) => [textarea.dataset.noteFor, textarea.value])),
          context: courseContext?.value || "",
          adjustmentId: app.dataset.adjustmentId || ""
        }));
      } catch (error) {}
    }

    function restoreState() {
      try {
        const payload = JSON.parse(localStorage.getItem(storageKey) || "null");
        if (!payload) return;
        levelSelects.forEach((select) => {
          const id = rowRecord(select).id;
          if (payload.levels?.[id]) select.value = payload.levels[id];
        });
        notes.forEach((textarea) => {
          if (typeof payload.notes?.[textarea.dataset.noteFor] === "string") {
            textarea.value = payload.notes[textarea.dataset.noteFor];
          }
        });
        if (courseContext && typeof payload.context === "string") courseContext.value = payload.context;
        if (payload.adjustmentId) {
          app.dataset.adjustmentId = payload.adjustmentId;
          app.dataset.adjustmentTitle = ADJUSTMENTS.find((item) => item.id === payload.adjustmentId)?.title || "";
        }
      } catch (error) {}
    }

    function levelLabel(value) {
      return {
        level1: "No/Poor",
        level2: "Developing",
        level3: "Proficient",
        level4: "Excellent",
        unknown: "Not yet selected"
      }[value] || "Not yet selected";
    }

    function dimensionLabel(code) {
      return {
        R: "Representation and respect for cultures and identities",
        E: "Equity of access and participation",
        A: "Accessibility and agency of materials and learning pathways",
        L: "Language and literacies"
      }[code] || code;
    }

    function getCounts() {
      const counts = { level1: 0, level2: 0, level3: 0, level4: 0, unknown: 0 };
      levelSelects.forEach((select) => {
        counts[select.value || "unknown"] += 1;
      });
      return counts;
    }

    function getPatternInsights(records) {
      const insights = [];
      const byDimension = {};
      const bySection = {};

      records.forEach((record) => {
        (byDimension[record.dimensionCode] ||= []).push(record.value);
        (bySection[record.sectionId] ||= []).push(record.value);
      });

      Object.entries(byDimension).forEach(([code, values]) => {
        const lowCount = values.filter((value) => value === "level1" || value === "level2").length;
        if (lowCount >= 2) {
          insights.push(`Patterns suggest that ${dimensionLabel(code).toLowerCase()} is a recurring barrier across multiple sections.`);
        }
      });

      Object.entries(bySection).forEach(([sectionId, values]) => {
        const noPoorCount = values.filter((value) => value === "level1").length;
        if (noPoorCount >= 2) {
          const sectionName = records.find((record) => record.sectionId === sectionId)?.sectionTitle || "One section";
          insights.push(`${sectionName} has several areas at No/Poor, suggesting that foundational redesign should come before adding more options or complexity.`);
        }
      });

      const adjustment = selectedAdjustment();
      if (adjustment) {
        insights.push(`Adjustment focus: ${adjustment.title}. Review how this need appears across ${adjustment.rows.length} related framework area${adjustment.rows.length === 1 ? "" : "s"}, while continuing to implement the individual adjustment.`);
      }

      if (!insights.length) {
        insights.push("Look for combinations across the sections and dimensions rather than treating each row in isolation. Review how design, teaching and assessment reinforce or relieve the same barrier.");
      }
      return insights;
    }

    function updateSummary() {
      const counts = getCounts();
      Object.entries(statTargets).forEach(([key, element]) => {
        if (element) element.textContent = String(counts[key]);
      });
      const complete = counts.level1 + counts.level2 + counts.level3 + counts.level4;
      if (summaryText) {
        summaryText.textContent =
          `${complete} of ${levelSelects.length} review areas selected. ` +
          `${counts.level1} at No/Poor, ${counts.level2} Developing, ${counts.level3} Proficient and ${counts.level4} Excellent.`;
      }
      if (progress) {
        progress.max = levelSelects.length;
        progress.value = complete;
        progress.textContent = `${complete} of ${levelSelects.length} review areas selected`;
      }
    }

    function itemList(items, emptyText) {
      if (!items.length) return `<p>${escapeHtml(emptyText)}</p>`;
      return "<ol>" + items.map((item) => {
        const action = item.recommendedAction
          ? `<br><span><strong>Suggested next move:</strong> ${escapeHtml(item.recommendedAction)}</span>`
          : "";
        return `<li><strong>${escapeHtml(item.sectionTitle)} — ${escapeHtml(item.dimensionCode)}: ${escapeHtml(item.dimensionTitle)}</strong> (${escapeHtml(levelLabel(item.value))})${action}</li>`;
      }).join("") + "</ol>";
    }

    function exampleList(records) {
      const unique = [];
      const seen = new Set();
      records.forEach((record) => {
        if (!record.exampleUrl || seen.has(record.exampleUrl)) return;
        seen.add(record.exampleUrl);
        unique.push(record);
      });
      if (!unique.length) return "<p>No external examples are linked for the visible review areas.</p>";
      return "<ul>" + unique.map((record) =>
        `<li><a href="${escapeHtml(record.exampleUrl)}">${escapeHtml(record.exampleTitle)}</a> — ${escapeHtml(record.exampleSource)}</li>`
      ).join("") + "</ul>";
    }

    function buildHtmlReport() {
      const records = levelSelects.map(rowRecord);
      const counts = getCounts();
      const priorities = records.filter((record) => record.value === "level1");
      const developments = records.filter((record) => record.value === "level2");
      const strengths = records.filter((record) => record.value === "level3" || record.value === "level4");
      const insights = getPatternInsights(records);
      const adjustment = selectedAdjustment();
      const noteMap = Object.fromEntries(
        notes
          .map((textarea) => [textarea.dataset.noteFor, textarea.value.trim()])
          .filter(([, value]) => value)
      );

      const adjustmentPlan = adjustment
        ? `<h3>Specific adjustment focus</h3>
           <p><strong>${escapeHtml(adjustment.title)}</strong></p>
           <p>${escapeHtml(adjustment.context)}</p>
           <p><strong>Continue implementing the adjustment:</strong> ${escapeHtml(adjustment.baseline)}</p>
           <p><strong>Use it as a design prompt:</strong> ${escapeHtml(adjustment.deeper)}</p>`
        : "";

      const planHtml =
        `<h3>Summary</h3><p>${escapeHtml(summaryText?.textContent || "")}</p>` +
        adjustmentPlan +
        `<h3>Pattern analysis</h3><ul>${insights.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul>` +
        `<h3>Start now — foundational priorities</h3>${itemList(priorities, "No review areas are currently marked as No/Poor.")}` +
        `<h3>Develop next</h3>${itemList(developments, "No review areas are currently marked Developing.")}` +
        `<h3>Consolidate and share strengths</h3>${itemList(strengths, "No review areas are currently marked Proficient or Excellent.")}` +
        `<h3>Examples to explore</h3>${exampleList(records)}` +
        `<h3>Suggested next conversation</h3><p>Confirm which changes can happen at course level now, which need student partnership, and which require program, platform or institutional action.</p>`;

      if (planOutput) {
        planOutput.innerHTML = planHtml;
        planOutput.hidden = false;
        planOutput.focus();
      }

      const rowsHtml = records.map((record) => {
        const note = noteMap[record.id] ? escapeHtml(noteMap[record.id]).replace(/\n/g, "<br>") : "—";
        const action = record.recommendedAction ? escapeHtml(record.recommendedAction) : "Select a level to receive a tailored next step.";
        const exampleLink = record.exampleUrl
          ? `<a href="${escapeHtml(record.exampleUrl)}">${escapeHtml(record.exampleTitle)}</a><br><span>${escapeHtml(record.exampleSource)}</span>`
          : "—";
        return `<tr>
          <th scope="row">${escapeHtml(record.sectionTitle)} — ${escapeHtml(record.dimensionCode)}: ${escapeHtml(record.dimensionTitle)}</th>
          <td>${escapeHtml(levelLabel(record.value))}</td>
          <td>${action}</td>
          <td>${note}</td>
          <td>${exampleLink}</td>
        </tr>`;
      }).join("");

      const adjustmentHtml = adjustment
        ? `<section><div class="wrap"><h2>Specific adjustment focus</h2>
             <h3>${escapeHtml(adjustment.title)}</h3>
             <p>${escapeHtml(adjustment.context)}</p>
             <p><strong>Individual implementation:</strong> ${escapeHtml(adjustment.baseline)}</p>
             <p><strong>Course-design response:</strong> ${escapeHtml(adjustment.deeper)}</p>
           </div></section>`
        : "";

      latestReportHtml = `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(toolTitle)} report</title>
<style>
body{margin:0;color:#101820;background:#fffdf6;font:16px/1.6 system-ui,-apple-system,"Segoe UI",Arial,sans-serif}
.wrap{width:min(calc(100% - 2rem),76rem);margin:auto}
header{padding:2rem 0 1rem;border-bottom:4px solid #101820}
h1,h2,h3{line-height:1.15}
h1{font-size:2.3rem;margin:0 0 1rem}
h2{font-size:1.6rem;margin:0 0 .75rem}
h3{font-size:1.2rem;margin:1.1rem 0 .55rem}
p,ul,ol{margin-top:0}
.summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;margin:1rem 0 1.4rem}
.summary div{padding:1rem;border:2px solid #101820;background:#f1f3f6}
.summary strong{display:block;font-size:1.55rem}
.callout{padding:1rem;border-left:8px solid #5a2a83;background:#efe7f7}
section{padding:1.6rem 0;border-top:2px solid #101820}
table{width:100%;border-collapse:collapse}
caption{text-align:left;font-weight:800;padding-bottom:.6rem}
th,td{padding:.8rem;border:2px solid #101820;vertical-align:top}
th{background:#f1f3f6;text-align:left}
@media(max-width:700px){.summary{grid-template-columns:repeat(2,minmax(0,1fr))}table{display:block;overflow-x:auto}}
@media(prefers-color-scheme:dark){
 body{color:#fff;background:#101820}
 header,section{border-color:#fff}
 .summary div,th{color:#fff;background:#1b2733;border-color:#fff}
 .callout{background:#2f2240;border-left-color:#d0b6ef}
 th,td{border-color:#fff}
}
@media print{body{font-size:11pt}section{break-inside:avoid}}
</style>
</head>
<body>
<header><div class="wrap">
<p><strong>Inclusive Teaching Hub — accessible HTML export</strong></p>
<h1>${escapeHtml(toolTitle)}</h1>
<p>This report was generated from the UQ inclusive framework review tool.</p>
</div></header>
<main>
<section><div class="wrap">
<h2>Course context</h2>
<p>${escapeHtml((courseContext?.value || "").trim() || "No course context entered.")}</p>
<div class="summary" aria-label="Review summary">
<div><strong>${counts.level1}</strong><span>No/Poor</span></div>
<div><strong>${counts.level2}</strong><span>Developing</span></div>
<div><strong>${counts.level3}</strong><span>Proficient</span></div>
<div><strong>${counts.level4}</strong><span>Excellent</span></div>
</div>
<div class="callout"><strong>Key principle</strong>
<p>These dimensions interact. A student may face barriers across several categories simultaneously, and the strongest inclusive practice addresses them in combination rather than ticking each off independently.</p>
</div>
</div></section>
${adjustmentHtml}
<section><div class="wrap"><h2>Pattern analysis</h2><ul>${insights.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul></div></section>
<section><div class="wrap"><h2>Action priorities</h2>
<h3>Start now — foundational priorities</h3>${itemList(priorities, "No review areas are currently marked as No/Poor.")}
<h3>Develop next</h3>${itemList(developments, "No review areas are currently marked Developing.")}
<h3>Consolidate and share strengths</h3>${itemList(strengths, "No review areas are currently marked Proficient or Excellent.")}
<h3>Examples to explore</h3>${exampleList(records)}
</div></section>
<section><div class="wrap">
<table><caption>Full review record, recommended actions and examples</caption>
<thead><tr><th scope="col">Review area</th><th scope="col">Selected level</th><th scope="col">Recommended next action</th><th scope="col">Notes</th><th scope="col">External example</th></tr></thead>
<tbody>${rowsHtml}</tbody></table>
</div></section>
<section><div class="wrap"><h2>Accessibility note</h2>
<p>This is a self-contained HTML report with semantic headings, a structured table, responsive layout and print styles. If converted to PDF, the PDF should still be checked for accessibility.</p>
</div></section>
</main>
<footer><div class="wrap"><p><small>Generated in the browser from the Inclusive Teaching Hub prototype.</small></p></div></footer>
</body>
</html>`;

      saveState();
      return latestReportHtml;
    }

    restoreState();
    updateSummary();

    levelSelects.forEach((select) => {
      select.addEventListener("change", () => {
        saveState();
        updateSummary();
      });
    });
    notes.forEach((textarea) => textarea.addEventListener("input", saveState));
    courseContext?.addEventListener("input", saveState);

    sectionFilter?.addEventListener("change", () => {
      app.querySelectorAll(".section-review").forEach((section) => {
        section.hidden = sectionFilter.value !== "all" && section.dataset.sectionId !== sectionFilter.value;
      });
    });

    generateButton?.addEventListener("click", () => {
      try {
        buildHtmlReport();
      } catch (error) {
        console.error(error);
        if (planOutput) {
          planOutput.innerHTML = `<h3>Report generation error</h3><p>${escapeHtml(error.message || "An unexpected error occurred.")}</p>`;
          planOutput.hidden = false;
          planOutput.focus();
        }
      }
    });

    downloadButton?.addEventListener("click", () => {
      try {
        if (!latestReportHtml) buildHtmlReport();
        const blob = new Blob([latestReportHtml], { type: "text/html;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${toolId}-inclusive-review-report.html`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (error) {
        console.error(error);
        window.alert(`The report could not be downloaded: ${error.message || "unknown error"}`);
      }
    });

    printButton?.addEventListener("click", () => window.print());

    clearButton?.addEventListener("click", () => {
      if (!window.confirm("Clear all saved review selections and notes for this tool?")) return;
      levelSelects.forEach((select) => { select.value = "unknown"; });
      notes.forEach((textarea) => { textarea.value = ""; });
      if (courseContext) courseContext.value = "";
      delete app.dataset.adjustmentId;
      delete app.dataset.adjustmentTitle;
      try {
        localStorage.removeItem(storageKey);
        localStorage.removeItem(`uq-framework-adjustment:${toolId}`);
      } catch (error) {}
      latestReportHtml = "";
      if (planOutput) {
        planOutput.hidden = true;
        planOutput.innerHTML = "";
      }
      document.querySelectorAll(".dimension-review.adjustment-highlight").forEach((row) => row.classList.remove("adjustment-highlight"));
      updateSummary();
    });
  });

  /* Case study filters */
  document.querySelectorAll("[data-story-filters]").forEach((filterSet) => {
    const buttons = Array.from(filterSet.querySelectorAll("[data-story-filter]"));
    const grid = document.querySelector("[data-story-grid]");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll("[data-story-card]"));

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.dataset.storyFilter;
        buttons.forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
        cards.forEach((card) => {
          const categories = (card.dataset.categories || "").split(" ");
          card.hidden = value !== "all" && !categories.includes(value);
        });
      });
    });
  });
}());
